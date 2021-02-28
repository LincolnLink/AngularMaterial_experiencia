
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePaginatorComponent } from './../table-paginator.component';



const routes: Routes = [
  { path: '', component: TablePaginatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePaginatorRoutingModule { }
