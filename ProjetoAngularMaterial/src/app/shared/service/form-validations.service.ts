import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  // Método "static" cria apenas uma instancia, não precisa instanciar!
  // Método que cria a validação personalizada!
  static requiredMinCheckBox(min = 1){

    // Contante que recebe uma função que trata o "formArray"!
    const validator = (formArray: FormArray) => {

    /* Programação funcional */
     const totalChecked = formArray.controls
     .map(v => v.value)
     .reduce((total, current) => current ? total + current : total, 0);

      // Retorna se atende ou não o minimo de check marcados!
      // Precisa retornar um objeto quando for required
      return totalChecked >= min ? null : {required: true};
    };

    return validator;
  }
}
