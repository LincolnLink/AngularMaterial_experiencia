import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//NGX-Bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
//Angular material menu lateral
import { AngularMaterialModule } from './shared/module/angular-material/angular-material.module';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';

//DragDrop do CDK
import { DragDropModule } from '@angular/cdk/drag-drop';
//Tabela do Angular Material
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AppComponent],
  imports: [
    //Basico do Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    //AngularMaterialModule,
    CollapseModule.forRoot(), //NGX-Bootstrap
    AccordionModule.forRoot(),
    AppRoutingModule,

  ],
  exports:
  [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
