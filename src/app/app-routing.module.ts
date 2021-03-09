import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


   {
    path: '', pathMatch: 'full', redirectTo: 'tableDinamica'
   },
   {
     path: 'formConfig',
     loadChildren: () => import('./form-config/form-config.module').then(m => m.FormConfigModule)
   },
   {
    path: 'formConfigRefatorado',
    loadChildren: () => import('./form-config-refatorado/form-config-refatorado.module')
      .then(m => m.FormConfigRefatoradoModule)
   },
   {
     path: 'table',
     loadChildren: () => import('./table/module/module.module').then( i => i.TableModule)
   },
   {
     path: 'tablePaginator',
     loadChildren: () => import('./table-paginator/table-paginator-module/table-paginator-module')
      .then(t => t.TablePaginatorModuleModule)
   },
   {
     path: 'tableCompleto',
     loadChildren: () => import('./table-completo/table-completo/table-completo.module')
      .then(t => t.TableCompletoModule)
   },
   {
     path: 'graficos',
     loadChildren: () => import('./graficos/graficos/graficos.module')
      .then(g => g.GraficosModule)
   },
   {
    path: 'tableDinamica',
    loadChildren: () => import('./table-dinamico/table-dynamic.module')
     .then(t => t.TableDinamicoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
