import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDinamico2Component } from '../dropdown-dinamico2.component';
import { DropdownDinamico2RoutingModule } from './dropdown-dinamico2-routing.module';

import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [DropdownDinamico2Component],
  imports: [
    CommonModule,
    DropdownDinamico2RoutingModule,
    DropdownModule

  ]
})
export class DropdownDinamico2Module { }
