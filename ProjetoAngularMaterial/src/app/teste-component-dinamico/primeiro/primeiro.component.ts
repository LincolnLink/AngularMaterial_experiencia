import { Component, OnInit,  ContentChild, TemplateRef, Input  } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  names: string[] = ['Lincoln', 'Estrela','Raimundo','Elenice'];

  @Input() names2: string[] = [];

  @ContentChild(TemplateRef)
  customTemplateRef!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
