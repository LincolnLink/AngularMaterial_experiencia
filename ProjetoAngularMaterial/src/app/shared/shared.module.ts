import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './component/campo-control-erro/campo-control-erro.component';

//component de mensagem de erro

//card
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CampoControlErroComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, //card
  ],
  exports:[
    CampoControlErroComponent,
    MatCardModule, //card
  ]
})
export class SharedModule { }
