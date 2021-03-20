import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  loginText = 'Login';
  signUpText = 'Inscreva-se';
  lessons = [ 'Lição 1',  'Lições 2' ];

  totalEstimate = 30;

  //Objeto de contexto
  ctx =
  {
    estimate: this.totalEstimate,
    nameValue: 'Lincoln'
  };

  // Referências de modelo
  @ViewChild('defaultTabButtons')
  private defaultTabButtonsTpl!: TemplateRef<any>;


  constructor() { }

  ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
  }

  login(){
    console.log('Login') ;
  }

  signUp(){
    console.log('Inscreva-se') ;
  }

}
