import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownDinamicoComponent } from './../dropdown-dinamico.component';


const routes: Routes = [
  { path: '', component: DropdownDinamicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownDinamicoRoutingModule { }
