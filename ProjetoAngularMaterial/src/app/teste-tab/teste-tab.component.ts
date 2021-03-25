import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-tab',
  templateUrl: './teste-tab.component.html',
  styleUrls: ['./teste-tab.component.css']
})
export class TesteTabComponent implements OnInit {

  tab1:string = 'Tab - 1'

  constructor() { }

  ngOnInit(): void {
  }

}
