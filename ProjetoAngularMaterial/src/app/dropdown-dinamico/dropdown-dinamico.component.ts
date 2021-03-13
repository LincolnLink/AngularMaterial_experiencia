import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPessoas } from '../shared/Entidades/Ipessoas';
import { DropdownService } from '../shared/service/dropdown.service';
import { FormValidationsService } from '../shared/service/form-validations.service';

@Component({
  selector: 'app-dropdown-dinamico',
  templateUrl: './dropdown-dinamico.component.html',
  styleUrls: ['./dropdown-dinamico.component.css']
})
export class DropdownDinamicoComponent implements OnInit {


  // corpo do formulario
  formulario: FormGroup = {} as FormGroup;

  // campos
  get listDropDown() {
    return this.formulario.get('listDropDown') as FormArray;
  }

  // pessoa selecionada
  selectedPessoa: any = null;

  // lista de pessoas
  ListPessoas: IPessoas[] = [];

  // Quantidade de campo
  amountOfFiel: number = 0;

  // lista de campos dropdown
  listField: Array<any>;

  constructor(
    private dropdownService: DropdownService,
    private formBuilder: FormBuilder,
    private formValid: FormValidationsService
  ){ this.listField = []; }

  ngOnInit(): void {

    this.getFields();

    this.formulario = this.formBuilder.group({
      nome: [''],
      amount: [''],
      listDropDown: this.buildDropDown()
    })
  }

  // Criando os dropdown
  buildDropDown() {
    const values = this.ListPessoas.map(v => new FormControl(false));
    return this.formBuilder.array(values, Validators.required);
  }


  //obtem quantidade de dropdown
  getAmount() {
    let amout: number = this.formulario.get('amount')?.value
    this.listField = []; //limpa array
    this.removeFields();
    this.amountOfFiel = amout; //recebe novo valor
    for (let i = 1; i <= amout; i++) { //cria qtde selects
      this.listField.push(i);
      this.addFields();
    }
  }

  //Alimentando os dropDowns
  getFields(){
    this.dropdownService.getPessoas().forEach((p) =>{
      this.ListPessoas.push({
        id: null,
        name: `Seleciona`,
      })

      p.forEach((value) => {
        this.ListPessoas.push({
          id: value.id,
          name: value.name,
        })
      })
    })
  }

  //adiciona campos dropdown
  addFields() {
    this.listDropDown.push(this.formBuilder.control({
        id: null,
        name: ''
    }));
  }


  //excluir campos dropdown
  removeFields() {
    while (this.listDropDown.length) {
      this.listDropDown.removeAt(this.listDropDown.length -1);
    }
  }

  hidenAmount(){
    let val = this.formulario.get('amount');
    if(val?.value > 0 && val?.value <= 4 && val?.value){
      return true;
    }else{
      return false;
    }
  }

  submit(): void {
    console.log(this.formulario);
  }

  //limpar form
  clearForm() {
    while (this.listDropDown.length) {
      this.listDropDown.removeAt(this.listDropDown.length -1);
      this.listDropDown.reset();
    }
  }












}
