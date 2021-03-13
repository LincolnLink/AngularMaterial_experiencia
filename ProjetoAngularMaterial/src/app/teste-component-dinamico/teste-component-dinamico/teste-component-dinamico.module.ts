import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponentDinamicoComponent } from '../teste-component-dinamico.component';
import { TesteComponentDinamicoRoutingModule } from './teste-component-dinamico-routing.module';
import { SegundoComponent } from '../segundo/segundo.component';
import { PrimeiroComponent } from '../primeiro/primeiro.component';



@NgModule({
  declarations:
  [
    TesteComponentDinamicoComponent,
    SegundoComponent,
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    TesteComponentDinamicoRoutingModule
  ]
})
export class TesteComponentDinamicoModule { }
