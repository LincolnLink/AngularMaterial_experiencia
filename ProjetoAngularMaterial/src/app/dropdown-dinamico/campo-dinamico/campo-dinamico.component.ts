import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IPessoas } from './../../shared/Entidades/Ipessoas';


const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CampoDinamicoComponent),
  multi: true
}

@Component({
  selector: 'campo-dinamico',
  templateUrl: './campo-dinamico.component.html',
  styleUrls: ['./campo-dinamico.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class CampoDinamicoComponent implements ControlValueAccessor {


  @Input() classeCss: any;
  @Input() id: string = '';
  @Input() label: string = '';


  //Não vou usar no dropDown
  @Input() type = 'text';
  @Input() placeholder: string = '';
  @Input() isReadOnly = false;
  @Input() control: any;

  //Valores dropdown
  @Input() listValue: IPessoas[] = [];

  //teste
  @Input() condicao2: boolean = false;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){

    //console.log('valor escolhido: ',v);

    if (v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }


  constructor() { }

 // Funções falsa, para retornar nada!
 onChangeCb: (_:any) => void = () => {};
 onTouchedCb: (_:any) => void = () => {};

 // Setar um valor
 writeValue(v: any): void {

   this.value = v;

   /*if(v !== this.innerValue){
     this.innerValue = v;
     this.onChangeCb(v);
   }*/
 }

 // Fala para o Angular toda vez que um valor muda!
 registerOnChange(fn: any): void {
   this.onChangeCb = fn;
 }

 // Fala com o Angular toda vez que o campo ganha foco!
 registerOnTouched(fn: any): void {
   this.onTouchedCb = fn;
 }

 // Fala pro Angular quando o Campo está dezabilitado !
 setDisabledState?(isDisabled: boolean): void {
   this.isReadOnly = isDisabled;
 }



}
