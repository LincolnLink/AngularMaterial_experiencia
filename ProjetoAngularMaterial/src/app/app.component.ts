import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //ngx-bootstrap
  isCollapsed = true;
  isTabela = true;
  isForm = true;
  isGrafic = true;
  isDinamico = true;

  constructor(){
  }

  ngOnInit(){

  }

}
