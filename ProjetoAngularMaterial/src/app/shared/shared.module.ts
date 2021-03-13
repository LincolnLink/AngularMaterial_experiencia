import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//component de mensagem de erro
import { CampoControlErroComponent } from './component/campo-control-erro/campo-control-erro.component';
//alert do prime
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
//card
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CampoControlErroComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule, // lib PremiumNG
    MessageModule,
    MatCardModule, //card
  ],
  exports:[
    CampoControlErroComponent,
    MatCardModule, //card
    MessagesModule, // lib PremiumNG
    MessageModule,
  ]
})
export class SharedModule { }
