import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componet
import { GraficosComponent } from './../graficos.component';



const routes: Routes = [
  { path: '', component: GraficosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
