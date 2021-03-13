import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponentDinamicoComponent } from './../teste-component-dinamico.component';


const routes: Routes = [
  { path: '', component: TesteComponentDinamicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteComponentDinamicoRoutingModule { }
