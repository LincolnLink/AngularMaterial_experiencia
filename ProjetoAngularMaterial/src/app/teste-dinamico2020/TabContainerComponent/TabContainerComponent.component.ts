import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-container',
  templateUrl: './TabContainerComponent.component.html',
  styleUrls: ['./TabContainerComponent.component.css']
})
export class TabContainerComponentComponent implements OnInit {


  @ViewChild('defaultTabButtons')
    private defaultTabButtonsTpl!: TemplateRef<any>;

  @Input()
    headerTemplate!: TemplateRef<any>;

  btnTexto: string = 'Mesmo botão em todas as telas'

  ctx =
  {
    titulo: this.btnTexto
  };

  constructor() { }

  ngOnInit() {
  }

  logica()
  {
    if(this.headerTemplate)
    {
      return this.headerTemplate;
    }
    else
    {
      return this.defaultTabButtonsTpl
    }



  }
}
