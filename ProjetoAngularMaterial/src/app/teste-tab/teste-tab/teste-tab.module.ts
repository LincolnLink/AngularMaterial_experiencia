import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//component
import { TesteTabComponent } from '../teste-tab.component';
import { MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from './../../shared/shared.module';
import { TesteTabRoutingModule } from './teste-tab-routing.module';



@NgModule({
  declarations: [TesteTabComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TesteTabRoutingModule,
    SharedModule
  ]
})
export class TesteTabModule { }
