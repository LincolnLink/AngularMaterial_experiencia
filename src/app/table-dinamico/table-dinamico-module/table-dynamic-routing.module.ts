import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDynamicComponent } from '../table-dynamic.component';



const routes: Routes = [
  { path: '', component: TableDynamicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDynamicRoutingModule { }
