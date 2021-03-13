import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ColunaTabelaAninhada } from 'src/app/shared/Entidades/colunaTabelaAninhada';

@Component({
  selector: 'linha-aninhada',
  templateUrl: './linha-aninhada.component.html',
  styleUrls: ['./linha-aninhada.component.scss']
})
export class LinhaAninhadaComponent implements OnInit {


  @ViewChild('conteudoDaLinha', { static: true })
  conteudoDaLinha!: TemplateRef<any>;

  /**
   * Inoforme o objeto que representa a linha da tabela
   */
  @Input()
  linha: any;

  /**
   * Informe as colunas da tabela
   */
  @Input()
  colunas: ColunaTabelaAninhada[] = [];

  /**
   * Informe a função para extrair, de cada linha, as linhas filhas.
   */
  @Input()
  extratorDeFilhos: (linha: any) => any[] = (_:any) => [null];

  /**
   * Informe a função para extrair, de cada linha, a classe de css customizada
   */
  @Input()
  extratorDeClasseCss: (nivel: any) => string = (nivel) => {return ''};

  /**
   * Esse input vai ser chamado recursivamente para definir o nível de cada linha
   */
  @Input()
  nivel = 0;

  filhos: any[] = [];

  /**
   * Define se a linha está expandida ou retraída.
   */
  expandido = false;

  /**
   * Armazena a classe CSS da linha.
   */
  classeCss = '';

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.conteudoDaLinha);

    this.extrairFilhos();
    this.extrairClasseCss();
  }

  private extrairFilhos() {
    if(this.extratorDeFilhos) {
      this.filhos = this.extratorDeFilhos(this.linha);
    }
  }

  private extrairClasseCss() {
    if(this.extratorDeClasseCss) {
      this.classeCss = this.extratorDeClasseCss(this.nivel);
    }
  }
}
