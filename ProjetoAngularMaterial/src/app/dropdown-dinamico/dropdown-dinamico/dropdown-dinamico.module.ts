import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//component
import { DropdownDinamicoComponent } from '../dropdown-dinamico.component';
import { DropdownDinamicoRoutingModule } from './dropdown-dinamico-routing.modulo';
import { CampoDinamicoComponent } from '../campo-dinamico/campo-dinamico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownService } from 'src/app/shared/service/dropdown.service';
import { FormValidationsService } from 'src/app/shared/service/form-validations.service';
//Aonde fica os component compartilhados
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DropdownDinamicoComponent,
    CampoDinamicoComponent
  ],
  imports: [
    CommonModule,
    DropdownDinamicoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
    // aonde fica os component compartilhado

  ],
  providers:[
    /*DropdownService,
    FormValidationsService*/
  ]
})
export class DropdownDinamicoModule { }
