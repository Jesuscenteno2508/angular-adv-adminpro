import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
//import { NgChartsModule } from 'ng2-charts';
//import { NgChartsModule } from 'ng2-charts';
//import { NgChartsModule } from 'C:\Users\jesus.centeno\node_modules\ng2-charts\lib\ng-charts.module.d.ts'
//C:\Users\jesus.centeno\node_modules\ng2-charts\lib\ng-charts.module.d.ts

@NgModule({
  declarations: [   
    PagesComponent,    //solo funciona de manera interna en este modulo
    Grafica1Component,  //como se van a utilizar fuera de este componente hay que Exportarlos
    ProgressComponent,
    DashboardComponent,
  ],
  exports:[
    PagesComponent,     //al exportar es como si estuvieran en su mismo lugar
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,   //se encarga de    <router-outlet></router-outlet>
    ComponentsModule,
   // NgChartsModule
    //NgChartsModule,
    //AppRoutingModule
  ]
})
export class PagesModule { }  //importar este modulo en el AppModule
