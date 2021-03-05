import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCompletoComponent } from './../table-completo.component';


const routes: Routes = [
  { path: '', component: TableCompletoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableCompletoRoutingModule { }
