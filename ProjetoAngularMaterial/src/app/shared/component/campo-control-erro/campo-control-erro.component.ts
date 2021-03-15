import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input()
  campo!: AbstractControl | FormControl | null;
  @Input() msnErro: string = '';
  @Input() cssErro: string = '';

  dismissible = true;


  constructor() { }

  ngOnInit(): void {


  }

   // (VALIDAÇÃO) Verifica se o campo foi tocado e se é valido!
   isInValidTouched(campo: AbstractControl | FormControl | null){

    if(campo !== null){
      return (
        !campo?.valid &&
        (campo?.touched || campo?.dirty)
      );
    }
    else{
      return false;
    }
  }
}
