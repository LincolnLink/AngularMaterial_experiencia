import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormConfigRoutingModule } from './form-config-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormConfigComponent } from './form-config.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [FormConfigComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormConfigRoutingModule,
    DragDropModule,
    AccordionModule.forRoot(),
  ],
  providers: []
})
export class FormConfigModule { }
