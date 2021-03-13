import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownDinamico2Component } from '../dropdown-dinamico2.component';

const routes: Routes = [
  { path: '', component: DropdownDinamico2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownDinamico2RoutingModule { }
