import { Component, OnInit } from '@angular/core';
import { folhaPagamento } from 'src/app/shared/data/db-rh';
import { ColunaTabelaAninhada } from 'src/app/shared/Entidades/colunaTabelaAninhada';

@Component({
  selector: 'relatorio-rh',
  templateUrl: './relatorio-rh.component.html',
  styleUrls: ['./relatorio-rh.component.css']
})
export class RelatorioRhComponent implements OnInit {

  colunas: ColunaTabelaAninhada[] = [
    {
      cabecalho: 'Setor/Funcionário',
      conteudoDaCelula: (linha) => linha.nome,
    },
    {
      cabecalho: 'Janeiro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[0].valor,
    },
    {
      cabecalho: 'Fevereiro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[1].valor,
    },
    {
      cabecalho: 'Março',
      conteudoDaCelula: (linha) => linha.folhaPagamento[2].valor,
    },
    {
      cabecalho: 'Abril',
      conteudoDaCelula: (linha) => linha.folhaPagamento[3].valor,
    },
    {
      cabecalho: 'Maio',
      conteudoDaCelula: (linha) => linha.folhaPagamento[4].valor,
    },
    {
      cabecalho: 'Junho',
      conteudoDaCelula: (linha) => linha.folhaPagamento[5].valor,
    },
    {
      cabecalho: 'Julho',
      conteudoDaCelula: (linha) => linha.folhaPagamento[6].valor,
    },
    {
      cabecalho: 'Agosto',
      conteudoDaCelula: (linha) => linha.folhaPagamento[7].valor,
    },
    {
      cabecalho: 'Setembro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[8].valor,
    },
    {
      cabecalho: 'Outubro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[9].valor,
    },
    {
      cabecalho: 'Novembro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[10].valor,
    },
    {
      cabecalho: 'Dezembro',
      conteudoDaCelula: (linha) => linha.folhaPagamento[11].valor,
    },
  ];

  linhas = folhaPagamento;

  constructor() { }

  ngOnInit(): void {
  }

  extratorDeLinhasFilhas(linha: any) {
    return linha.funcionarios;
  }

  extratorDeCssClassCustomizadaParaLinha(nivel: any) {
    if(nivel === 0) {
      return 'setor';
    }
    return 'funcionario';
  }

}
