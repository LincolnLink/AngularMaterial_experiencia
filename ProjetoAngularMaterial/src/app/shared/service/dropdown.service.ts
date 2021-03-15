import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPessoas } from '../Entidades/Ipessoas';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getPessoas(){

    return this.http.get<IPessoas[]>('assets/dados/pessoas.json');
    //.pipe(map((res: Response) => res.json()));
  }

  //POST - envia dados para uma API de teste
  postPessoas(form: FormGroup){

    // Criando uma copia do valor!
    let valueSubmit = Object.assign({}, form.value);

    console.log(valueSubmit);
  }


}
