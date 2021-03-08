import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { vendas } from 'src/app/shared/data/db-vendas';
import { ColunaTabelaAninhada } from 'src/app/shared/Entidades/colunaTabelaAninhada';


const nomesDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

@Component({
  selector: 'relatorio-de-vendas',
  templateUrl: './relatorio-de-vendas.component.html',
  styleUrls: ['./relatorio-de-vendas.component.scss']
})
export class RelatorioDeVendasComponent implements AfterViewInit, OnInit {

  @ViewChild('colunaDeAcao', { static: false })
  colunaDeAcao!: TemplateRef<any>;

  colunas: ColunaTabelaAninhada[] = [];

  linhas = vendas;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.montaColunas();
  }

  private montaColunas() {
    this.montaColunaNome();
    this.monstaColunasDeMeses();
    this.montaColunaDeAcao();
  }

  private montaColunaDeAcao() {
    const coluna: ColunaTabelaAninhada = {
      cabecalho: '',
      conteudoDaCelula: this.colunaDeAcao,
      classeCss: 'coluna-de-acao'
    }
    this.colunas.push(coluna);
  }

  private montaColunaNome() {
    const coluna: ColunaTabelaAninhada = {
      cabecalho: 'Setor/produto',
      classeCssCabecalho: 'cabecalho-nome',
      conteudoDaCelula: (linha) => linha.nome,
      classeCss: 'coluna-nome',
    }
    this.colunas.push(coluna);
  }

  private monstaColunasDeMeses() {
    const colunasDeMeses = nomesDosMeses.map((mes, indice) => {
      const coluna: ColunaTabelaAninhada = {
        cabecalho: mes,
        classeCssCabecalho: 'cabecalho-valor',
        conteudoDaCelula: (linha) => this.vendaNoMes(linha, indice + 1),
        classeCss: 'coluna-valor',
      }
      return coluna;
    });

    this.colunas.push(...colunasDeMeses);
  }

  private vendaNoMes(linha: any, mes: any) {
    const venda = linha.vendas.find((v: any) => v.mes === mes);
    return Number(venda.valor).toFixed(2);
  }

  extratorDeLinhasFilhas = (linha: any) => {
    if(linha.produtos) {
      return linha.produtos;
    }

    if(linha.marcas) {
      return linha.marcas;
    }
    return null;
  }

  extratorDeCssClassCustomizadaParaLinha = (nivel: any) => {
    if(nivel === 0) {
      return 'setor';
    }

    if(nivel === 1) {
      return 'produto';
    }

    return 'marca'
  }

  selecionaLinha(linha: any) {
    alert(linha.nome);
  }

}
