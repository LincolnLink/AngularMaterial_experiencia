import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { multi } from '../shared/data/dataGrafico';
import { single } from '../shared/data/graficoBarHor';
import { pizza } from '../shared/data/graficoPizza';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

    //Tamanho dos graficos
    //view: [number, number] = [0, 0];


    // Grafico em barra
    single: any[] = [];

    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = false;

    showXAxisLabelBarhor: boolean = true;
    showYAxisLabelBarhor: boolean = true;

    yAxisLabelBarhor: string = 'Country';
    xAxisLabelBarhor: string = 'Population';

    colorSchemeBarHor = {
      domain: ['#5252f7', '#5AA454', '#5252f9', '#5AA454']
    };


    //Grafico em pizza
    pizza: any[] = [];

    // options
    gradientPizza: boolean = true;
    showLegendPizza: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'right';

    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    //Deixando os graficos responsivo
    @ViewChild('resizedDiv') resizedDiv!: ElementRef;

    public previousWidthOfResizedDiv: number = 0;


    constructor() {}

    ngOnInit(){
      // Dados do banco
      Object.assign(this, { multi });
      Object.assign(this, { single });
      Object.assign(this, { pizza });

    }

    onSelect(data: Event): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: Event): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: Event): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

    // Método que deixar grafico responsivo
    ngAfterViewChecked() {
      if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {

        //render your data for the chart using spread operator
        this.single = [...this.single]
      }
      this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }



}
