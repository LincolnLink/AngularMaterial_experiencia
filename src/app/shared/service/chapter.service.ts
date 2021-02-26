import { chapter } from '../Entidades/chapter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends CrudService<chapter>{

  protected readonly API = `${environment.API}chapter`;

  constructor(protected http: HttpClient)
  {
    super(http, `${environment.API}chapter`);
  }
}
