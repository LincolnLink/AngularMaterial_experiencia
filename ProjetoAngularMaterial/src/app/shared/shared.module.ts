import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//component de mensagem de erro
import { CampoControlErroComponent } from './component/campo-control-erro/campo-control-erro.component';
//alert do prime
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



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
  ],
  exports:[
    CampoControlErroComponent
  ]
})
export class SharedModule { }
