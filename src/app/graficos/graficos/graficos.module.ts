import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componet
import { GraficosComponent } from '../graficos.component';
import { GraficosRoutingModule } from './graficos.routing.module';
//card
import { MatCardModule } from '@angular/material/card';
//grafico
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [GraficosComponent],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    NgxChartsModule,

    MatCardModule, //card

    GoogleChartsModule,//grafico


  ]
})
export class GraficosModule { }
