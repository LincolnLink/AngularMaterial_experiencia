import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
//NxJS
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
//Entidades
import { chapter } from '../shared/Entidades/chapter';
import { questions } from 'src/app/shared/Entidades/questions';
import { answer } from '../shared/Entidades/answer';
import { dateGroup } from '../shared/Entidades/dateGroup';
//Serviços
import { ChapterService } from '../shared/service/chapter.service';
import { QuestionsService } from '../shared/service/questions.service';
import { AnswerService } from './../shared/service/answer.service';


@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls:['form-config.component.css']
})
export class FormConfigComponent implements OnInit, AfterContentInit {



    listGroup$: dateGroup[] = [];
    //public listGroup$!: Observable<dateGroup[]>;

    initGroupD(){
      return {
        chapter: {} as chapter,
        questions: []
      }
    }

    constructor(
    private questionsService: QuestionsService,
    private answerService: AnswerService,
    private chapterService: ChapterService
    ) { }


    ngOnInit(){

      // Requisições dos capitulos/perguntas/respostas,a lista vem ordenada baseada no index
      const allReq$ = forkJoin({

         req1: this.chapterService.list()
         .pipe(
           catchError(error => {
             console.error(error);
             return [];
           }),
           map(list =>{
            return list.sort((x, y)=>{
              return x.index - y.index;
            });
           })
         ),

         req2: this.questionsService.list()
         .pipe(
           catchError(error => {
             console.error(error);
             return [];
           }),
           map(list =>{
            return list.sort((x, y)=>{
              return x.index - y.index;
            });
           })
         ),

         req3: this.answerService.list()
         .pipe(
           catchError(error => {
             console.error(error);
             return [];
           }),
           map(list =>{
            return list.sort((x, y)=>{
              return x.index - y.index;
            });
           })
         )
      });

      // Alimenta o array que agrupa as listas!
      allReq$.pipe(map((reqs) => this.agrupando(reqs))).subscribe(sucess => this.listGroup$ = sucess);
    }


    // Distribuição com base no objeto final, e agrupa em um unico array!
    agrupando(result: {
      req1: chapter[];
      req2: questions[];
      req3: answer[];
    })
    {
      let list: dateGroup[] = [];

      // Distribuição de dados!
      if(result.req1.length !== 0)
      {
        for (let i1 = 0; i1 < result.req1.length; i1++)
        {
          let grupo: dateGroup = this.initGroupD();

          grupo.chapter.id = result.req1[i1].id
          grupo.chapter.index = result.req1[i1].index;
          grupo.chapter.text = result.req1[i1].text;


          if(result.req2.length !== 0)
          {
            for (let i2 = 0; i2 < result.req2.length; i2++)
            {
              if(result.req1[i1].id == result.req2[i2].chapterId)
              {
                grupo.questions.push(result.req2[i2]);
                grupo.questions[i2].listAnswer = [];


                if(result.req3.length !== 0)
                {
                  for (let i3 = 0; i3 < result.req3.length; i3++)
                  {
                    if(result.req2[i2].id == result.req3[i3].questionsId)
                    {
                      grupo.questions[i2].listAnswer.push(result.req3[i3]);
                    }
                  }
                }

              }
            }
          }

          list.push(grupo);
        }
      }

      return list;
    }


    ngAfterContentInit(){



    }

    // Método que atualiza o index, quando a pessoa troca a posição!
    dropChapter(event: CdkDragDrop<string[]>, list: dateGroup[]) {
      moveItemInArray(list, event.previousIndex, event.currentIndex);

      let listchapter: chapter[] = [];

      for (let index = 0; index < list.length; index++) {

        list[index].chapter.index = index;
        listchapter.push(list[index].chapter)
      }

        this.chapterService.bulkupdate(listchapter)
        .pipe(catchError(error => EMPTY))
        .subscribe(sucess =>{console.log("mandou", sucess)});
    }

    // Método que atualiza o index, quando a pessoa troca a posição!
    dropQuestions(event: CdkDragDrop<string[]>, list: questions[]) {
      moveItemInArray(list, event.previousIndex, event.currentIndex);

      for (let index = 0; index < list.length; index++) {

        list[index].index = index;
      }

     this.questionsService.bulkupdate(list)
        .pipe(catchError(error => EMPTY))
        .subscribe();
    }

    // Método que atualiza o index, quando a pessoa troca a posição!
    dropAnswer(event: CdkDragDrop<string[]>, list: answer[]) {
      moveItemInArray(list, event.previousIndex, event.currentIndex);

      //let listQ: questions[] = [];

      for (let index = 0; index < list.length; index++) {

        list[index].index = index;
      }

      //listQ.push(list);

     this.answerService.bulkupdate(list)
        .pipe(catchError(error => EMPTY))
        .subscribe();
    }


    // Remove a pergunta da lista!
    delete(id: string){

      console.log("Deletado!");
      /*
      this.questionsService.delete(id)
      .pipe(

        //concatMap()

      ).subscribe(
        (sucess)=>{

          this.listQuestions$ = this.listQuestions$.filter(i => i.id !== id);

            // Atualizando os index!
            for (let index = 0; index < this.listQuestions$.length; index++) {

              this.listQuestions$[index].index = index;

              this.questionsService.update(this.listQuestions$[index])
              .subscribe();
            }

          console.log(sucess)
        },
        error =>{
          console.log(error);
        }
      )*/
    }




}
