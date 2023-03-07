import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


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
    CommonModule,
    SharedModule,
    RouterModule   //se encarga de    <router-outlet></router-outlet>
    //AppRoutingModule
  ]
})
export class PagesModule { }  //importar este modulo en el AppModule
