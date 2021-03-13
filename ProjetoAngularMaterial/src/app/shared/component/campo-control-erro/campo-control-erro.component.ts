import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input()
  condicao: boolean = false;
  @Input() msnErro: string = '';
  @Input() cssErro: string = '';

  dismissible = true;


  constructor() { }

  ngOnInit(): void {
  }

}
