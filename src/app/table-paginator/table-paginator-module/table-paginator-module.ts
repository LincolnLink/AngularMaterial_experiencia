import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginatorComponent } from '../table-paginator.component';
import { TablePaginatorRoutingModule } from './table-paginator-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [TablePaginatorComponent],
  imports: [
    CommonModule,
    TablePaginatorRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ]
})
export class TablePaginatorModuleModule { }
