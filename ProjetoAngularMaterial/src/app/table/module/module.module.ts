import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from '../table.component';
import { SharedModule } from '../../shared/shared.module';
 //Tabela do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
//Card
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations:
  [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,

    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,


  ]
})
export class TableModule { }
