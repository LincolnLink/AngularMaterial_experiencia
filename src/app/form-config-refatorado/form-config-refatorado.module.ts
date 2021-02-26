import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormConfigRefatoradoRoutingModule } from './form-config-refatorado-routing.module';
import { FormConfigRefatoradoComponent } from './form-config-refatorado.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccordionModule } from 'ngx-bootstrap/accordion';




@NgModule({
  declarations: [FormConfigRefatoradoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormConfigRefatoradoRoutingModule,
    DragDropModule,
    AccordionModule.forRoot()

  ],
  providers: []

})
export class FormConfigRefatoradoModule { }
