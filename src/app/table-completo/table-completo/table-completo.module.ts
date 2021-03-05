
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { TableCompletoComponent } from '../table-completo.component';
import { TableCompletoRoutingModule } from './table-completo-routing.module';
//Tabela do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
//card
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TableCompletoComponent],
  imports: [
    CommonModule,
    TableCompletoRoutingModule,

    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,

    MatCardModule //card
  ]
})
export class TableCompletoModule { }
