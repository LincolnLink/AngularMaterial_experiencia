import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TesteDinamico2020Component } from '../teste-dinamico2020.component';
import { TesteDinamico2020RoutingModule } from './teste-dinamico2020-routing.module';
import { GuiaComponent } from '../guia/guia.component';
import { TabContainerComponentComponent } from '../TabContainerComponent/TabContainerComponent.component';



@NgModule({
  declarations: [
    TesteDinamico2020Component,
    GuiaComponent,
    TabContainerComponentComponent
  ],
  imports: [
    CommonModule,
    TesteDinamico2020RoutingModule,
    SharedModule
  ],
})
export class TesteDinamico2020Module { }
