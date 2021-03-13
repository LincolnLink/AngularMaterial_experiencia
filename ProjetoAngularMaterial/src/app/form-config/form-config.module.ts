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
//Acordion do AngularMaterial
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [FormConfigComponent],
  imports: [
    CommonModule,// Basico do Angular
    HttpClientModule,
    FormConfigRoutingModule,
    SharedModule,

    DragDropModule,//DragDrop do CDK
    AccordionModule.forRoot(),//NGX-Bootstrap

    MatExpansionModule, //Acordion do AngularMaterial
    MatIconModule,
    MatButtonModule,


  ],
  providers: []
})
export class FormConfigModule { }
