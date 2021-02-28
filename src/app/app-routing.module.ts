import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


   {
    path: '', pathMatch: 'full', redirectTo: 'table'
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
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
