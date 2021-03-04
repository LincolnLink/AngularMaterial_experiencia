import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Component
import { FormConfigRoutingModule } from './form-config-routing.module';
import { FormConfigComponent } from './form-config.component';
//NGX-Bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';
//DragDrop do CDK
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [FormConfigComponent],
  imports: [
    CommonModule,// Basico do Angular
    HttpClientModule,
    FormConfigRoutingModule,

    DragDropModule,//DragDrop do CDK
    AccordionModule.forRoot(),//NGX-Bootstrap
  ],
  providers: []
})
export class FormConfigModule { }
