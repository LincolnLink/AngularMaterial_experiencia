import { Component, OnInit } from '@angular/core';
import { multi } from '../shared/data/dataGrafico';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  myType = 'ColumnChart' ;

  myData = [
    [ 'Londres' , 500 ],
    [ 'New York' , 400 ],
    [ 'Paris' , 300 ],
    [ 'Berlim' , 20 ],
    [ 'Kairo' , 90 ]
  ];

  /*ngx tabela */

  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }

  ngOnInit(){
    Object.assign(this, { multi });
    //this.multi = multi
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

}
