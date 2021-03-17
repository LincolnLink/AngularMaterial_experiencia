import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteDinamico2020Component } from '../teste-dinamico2020.component';


const routes: Routes = [
  { path: '', component: TesteDinamico2020Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteDinamico2020RoutingModule { }
