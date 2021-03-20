import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteTabComponent } from './../teste-tab.component';



const routes: Routes = [
  { path: '', component: TesteTabComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteTabRoutingModule { }
