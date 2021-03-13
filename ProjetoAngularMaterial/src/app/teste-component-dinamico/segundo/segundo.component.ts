import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  listName: string[] = ['Lincoln', 'Estrela','Raimundo','Elenice'];

  constructor() { }

  ngOnInit(): void {
  }

}
