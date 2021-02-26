import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


   {
    path: '', pathMatch: 'full', redirectTo: 'formConfigRefatorado'
   },
   {
     path: 'formConfig',
     loadChildren: () => import('./form-config/form-config.module').then(m => m.FormConfigModule)
   },
   {
    path: 'formConfigRefatorado',
    loadChildren: () => import('./form-config-refatorado/form-config-refatorado.module').then(m => m.FormConfigRefatoradoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
