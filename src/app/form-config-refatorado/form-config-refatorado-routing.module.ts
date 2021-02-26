import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormConfigRefatoradoComponent } from './form-config-refatorado.component';

const routes: Routes = [
  { path: '', component: FormConfigRefatoradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConfigRefatoradoRoutingModule { }
