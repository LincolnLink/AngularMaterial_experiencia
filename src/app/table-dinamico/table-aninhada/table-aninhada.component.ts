import { Component, Input, OnInit } from '@angular/core';
import { ColunaTabelaAninhada } from 'src/app/shared/Entidades/colunaTabelaAninhada';

@Component({
  selector: 'table-aninhada',
  templateUrl: './table-aninhada.component.html',
  styleUrls: ['./table-aninhada.component.css']
})
export class TableAninhadaComponent implements OnInit {

   /**
   * Informe as colunas da sua tabelas
   */
   @Input()
   colunas: ColunaTabelaAninhada[] = [];

    /**
   * Informe o array de dados da sua tabela, onde cada elemento será um linhas da tabela
   */
   @Input()
   linhas: any[] = [];


   /**
   * Informe a função para extrair, de cada linha, as linhas filhas.
   */
    @Input()
    extratorDeFilhos: (linha: any) => any[] = (_:any) => [null];
   /**
   * Informe a função para extrair, de cada linha, a classe de css customizada
   */
   @Input()
   extratorDeClasseCss: (nivel: any) => string = ((nivel)=>{ return ''});

  constructor() { }

  ngOnInit(): void {

  }


}
