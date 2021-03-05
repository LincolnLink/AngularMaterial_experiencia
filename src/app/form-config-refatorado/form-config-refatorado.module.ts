import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//Component
import { FormConfigRefatoradoRoutingModule } from './form-config-refatorado-routing.module';
import { FormConfigRefatoradoComponent } from './form-config-refatorado.component';
//DragDrop do CDK
import { AccordionModule } from 'ngx-bootstrap/accordion';
//NGX-Bootstrap
import { DragDropModule } from '@angular/cdk/drag-drop';
//card
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FormConfigRefatoradoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormConfigRefatoradoRoutingModule,

    DragDropModule, //DragDrop do CDK

    AccordionModule.forRoot(), //NGX-Bootstrap

    MatCardModule //card

  ],
  providers: []

})
export class FormConfigRefatoradoModule { }
