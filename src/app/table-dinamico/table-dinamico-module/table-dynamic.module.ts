import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDynamicRoutingModule } from './table-dynamic-routing.module';
import { TableDynamicComponent } from '../table-dynamic.component';
import { TableAninhadaComponent } from '../table-aninhada/table-aninhada.component';
import { LinhaAninhadaComponent } from '../table-aninhada/linha-aninhada/linha-aninhada.component';
import { CelulaAninhadaComponent } from '../table-aninhada/celula-aninhada/celula-aninhada.component';
import { RelatorioRhComponent } from '../relatorio-rh/relatorio-rh.component';
import { RelatorioDeVendasComponent } from '../relatorio-de-vendas/relatorio-de-vendas.component';



@NgModule({
  declarations: [
    TableDynamicComponent,
    TableAninhadaComponent,
    LinhaAninhadaComponent,
    CelulaAninhadaComponent,
    RelatorioRhComponent, //Component do RH
    RelatorioDeVendasComponent //Component de vendas
  ],
  imports: [
    CommonModule,
    TableDynamicRoutingModule
  ]
})
export class TableDinamicoModule { }
