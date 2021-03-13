
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { TableCompletoComponent } from '../table-completo.component';
import { TableCompletoRoutingModule } from './table-completo-routing.module';
import { SharedModule } from '../../shared/shared.module';
//Tabela do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
//btn
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [TableCompletoComponent],
  imports: [
    CommonModule,
    TableCompletoRoutingModule,
    SharedModule,

    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule //btn
  ]
})
export class TableCompletoModule { }
