import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TablePaginatorComponent } from '../table-paginator.component';
import { TablePaginatorRoutingModule } from './table-paginator-routing.module';
 //Tabela do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [TablePaginatorComponent],
  imports: [
    CommonModule,
    TablePaginatorRoutingModule,
    SharedModule,

    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,




  ]
})
export class TablePaginatorModuleModule { }
