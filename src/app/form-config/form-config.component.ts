import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

import { chapter } from '../shared/Entidades/chapter';
import { questions } from 'src/app/shared/Entidades/questions';
import { answer } from '../shared/Entidades/answer';
import { ChapterService } from '../shared/service/chapter.service';
import { QuestionsService } from '../shared/service/questions.service';
import { AnswerService } from './../shared/service/answer.service';


@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls:['form-config.component.css']
})
export class FormConfigComponent implements OnInit, OnDestroy {


  // Lista de perguntas
  listChapter$: chapter[] = [];
  subChapter: Subscription = new Subscription;
  dropChapterDestroi: Subscription = new Subscription;

  listQuestions$: questions[] = [];
  subQuestions: Subscription = new Subscription;

  listAnswer$: answer[] = [];
  subAnswer: Subscription = new Subscription;


    initGroupD(){
      return {
        chapter: {} as chapter,
        questions: [],
        answer: []
      }
    }


    constructor(
    private questionsService: QuestionsService,
    private answerService: AnswerService,
    private chapterService: ChapterService
    ) { }


    ngOnInit(){
      this.onRefresh();
      console.log("Passou aqui");
    }

    ngOnDestroy(): void {

      this.subChapter.unsubscribe();
      this.subQuestions.unsubscribe();
      this.subAnswer.unsubscribe();

      this.dropChapterDestroi.unsubscribe();

    }



  // Busca as perguntas listadas e bota em ordem baseada com index
    onRefresh(){


      // Carregando a lista de capitulo!
      this.chapterService.list()
      .pipe(catchError(error => EMPTY))
      .subscribe(
        (dados: chapter[]) => {
          dados.forEach(element => {
            this.listChapter$.push(element)
          });

          // Ordenação com base no index
          this.listChapter$.sort((x, y)=>{
            return x.index - y.index;
          });
        },
        error => console.log(error)
      );


      // Carregando a lista de perguntas!
      this.questionsService.list()
      .pipe(catchError(error => EMPTY))
      .subscribe(
        (dados: questions[]) => {
          dados.forEach(element => {
            this.listQuestions$.push(element)
          });

          // Ordenação com base no index
          this.listQuestions$.sort((x, y)=>{
            return x.index - y.index;
          });
        },
        error => console.log(error)
      );


      // Carregando a lista de respostas
      this.answerService.list()
      .pipe(catchError(error => EMPTY))
      .subscribe(
        (sucesso: answer[]) =>{
          sucesso.forEach(element => {
            this.listAnswer$.push(element)
          });

          // Ordenação com base no index TODO transformar em um Pipe
          this.listAnswer$.sort((x, y)=>{
            return x.index - y.index;
          });
        },
        error => console.log(error)
      )


    }




    // Método que atualiza o index, quando a pessoa troca a posição!
    dropChapter(event: CdkDragDrop<string[]>, list: chapter[]) {
      moveItemInArray(list, event.previousIndex, event.currentIndex);

      for (let index = 0; index < list.length; index++) {

        list[index].index = index;
      }


        this.dropChapterDestroi = this.chapterService.bulkupdate(list)
        .pipe(catchError(error => EMPTY))
        .subscribe();
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

      let listAnswerTotal = [];

      // Pega as id's diferentes das questiones e lista!
      const listIdQuestion = [...new Set(list.map(item => item.questionsId))];
      //console.log(listIdQuestion);

      // Varredura baseada nos id da questão
      for (let k = 0; k < listIdQuestion.length; k++) {

        // Lista apenas os itens que tem o Id informado!
        let lengthQuestionById = list.filter(i => i.questionsId === listIdQuestion[k])

        // Com base a sua ordem que foi definida no frontEnd, recebe o novo Id
        for (let index = 0; index < lengthQuestionById.length; index++) {

          lengthQuestionById[index].index = index;
          listAnswerTotal.push(lengthQuestionById[index]);

        }
      }
      console.log("Lista com index atualizada: ", listAnswerTotal)

      this.answerService.bulkupdate(listAnswerTotal)
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

    linkingAnswer(idQuestions: string){
      return this.listAnswer$.filter(i => i.questionsId == idQuestions);
    }

    linkingQuestion(idChapter: string){
      return this.listQuestions$.filter(i => i.chapterId == idChapter);
    }

}
