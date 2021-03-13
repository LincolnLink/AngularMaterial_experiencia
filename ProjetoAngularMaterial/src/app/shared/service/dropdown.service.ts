import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoas,IPessoas2 } from '../Entidades/Ipessoas';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getPessoas(){

    return this.http.get<IPessoas[]>('assets/dados/pessoas.json');
    //.pipe(map((res: Response) => res.json()));

  }

  get(){

    return this.http.get<IPessoas2[]>('assets/dados/dados.json');
    //.pipe(map((res: Response) => res.json()));

  }
}
