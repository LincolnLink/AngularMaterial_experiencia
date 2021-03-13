import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownService } from '../shared/service/dropdown.service';

@Component({
  selector: 'app-dropdown-dinamico2',
  templateUrl: './dropdown-dinamico2.component.html',
  styleUrls: ['./dropdown-dinamico2.component.css']
})
export class DropdownDinamico2Component implements OnInit {



  @Input() Amout: any;

  form: FormGroup = {} as FormGroup;

  get shifts() {
    return this.form.get('shifts') as FormArray;
  }
  selectedSchedule: any = null;
  schedules: any[] = [];
  public day: number = 0;
  days: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private  dropdownService: DropdownService
  ) {
    this.days = [];
  }

  ngOnInit(): void {
    /*

    this.getShifts(); // Carrega Shifts API
    this.form = this.formBuilder.group({
      name: [null],
      qtd_day: [null],
      shifts: this.buildSchedule()
    })
    */
  }

  /*
  //cria controle escala
  buildSchedule() {
    const values = this.schedules.map(v => new FormControl(false));
    return this.formBuilder.array(values);
  }

  //obtem quantidade de escala
  getAmount(event: any) {
    let amout = event.target.value;
    this.days = []; //limpa array
    this.removeShift();
    this.day = amout; //recebe novo valor
    for (let i = 1; i <= amout; i++) { //cria qtde selects
      this.days.push(i);
      this.addShift();
    }
  }

  //obtem escala
  getShifts() {
    this.dropdownService.get().forEach((s) => {
      this.schedules.push({
        description: `FOLGA`,
        shift_id: null,
        is_workday: false,
      })

      s.forEach((value) => {
        this.schedules.push({
          description: `${value.shift_start.slice(0, 5)} às ${value.shift_end.slice(0, 5)}`,
          shift_id: value.id,
          is_workday: true,
        })
      })
    })
  }

  //adiciona escala
  addShift() {
    this.shifts.push(this.formBuilder.control({
        description: ``,
        shift_id: null,
        is_workday: false,
    }));
  }

  //excluir escala
  removeShift() {
    while (this.shifts.length) {
      this.shifts.removeAt(this.shifts.length -1);
    }
  }

  //limpar form
  clearForm() {
    while (this.shifts.length) {
      this.shifts.removeAt(this.shifts.length -1);
      this.form.reset();
    }
  }
  method(): void {
    console.log(this.form);
  }*/
 }



