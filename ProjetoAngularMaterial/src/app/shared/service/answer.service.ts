import { Injectable } from '@angular/core';
import { answer } from '../Entidades/answer';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnswerService extends CrudService<answer>{

  protected readonly API = `${environment.API}answers`;

  constructor(protected http: HttpClient)
  {
    super(http, `${environment.API}answers`);
  }

  // Put
  /*
  public updateDrop(record: any, n: string){
    return this.http.put(`${this.API}/${record['id']}/${n}`,record)
    .pipe(take(2));
  }*/
}
