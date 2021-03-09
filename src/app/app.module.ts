import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//NGX-Bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
//DragDrop do CDK
import { DragDropModule } from '@angular/cdk/drag-drop';
//Tabela do Angular Material
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GoogleChartsModule } from 'angular-google-charts';
import { TesteComponentDinamicoComponent } from './teste-component-dinamico/teste-component-dinamico.component';


@NgModule({
  declarations: [AppComponent, TesteComponentDinamicoComponent],
  imports: [
    BrowserModule, //Basico do Angular
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CollapseModule.forRoot(), //NGX-Bootstrap

    //GoogleChartsModule.forRoot(),//grafico

    /*
    DragDropModule, //DragDrop do CDK

    MatTableModule, // Tabela do Angular Material
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule*/

  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
