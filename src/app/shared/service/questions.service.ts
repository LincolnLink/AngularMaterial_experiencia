import { Injectable } from '@angular/core';
import { questions } from 'src/app/shared/Entidades/questions';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends CrudService<questions>{

  protected readonly API = `${environment.API}questions`;

  constructor(protected http: HttpClient)
  {
    super(http, `${environment.API}questions`);
  }


  /*
  // Pega todos
  getAll(){
    return this.httpService.get<questions[]>(this.API)
  }

  // PUT
  update(item: questions){

    return this.httpService.put(`${this.API}/${item.id}`,item).pipe(take(1));


  }

  delete(id: number){
    return this.httpService.delete(`${this.API}/${id}`)
    .pipe(take(1));
  }

  */


}
