import { Component, NgModule } from '@angular/core';
//no se va ocupar ngg ngfor ya que es solo de rutas
//import { CommonModule } from '@angular/common'; 
import { PagesRoutingModule } from './pages/pages.routing';

import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesComponent } from './pages/pages.component';

// se pasaron al modulo  pageRoutingModule//
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { Grafica1Component } from './pages/grafica1/grafica1.component';
//import { PagesComponent } from './pages/pages.component';
//import { ProgressComponent } from './pages/progress/progress.component';


//importar en el app.miodule
//importar rutas primarias
const routes:  Routes = [
  
  /*
  //se paso a pages.routing path:Dashboard  Pages.Routing.ts
  //dentro de este van estar las rutas protegidas
  {   path: ''
      , component:PagesComponent
    //definir rutas hijas del componente de arriba
      ,children:[
        { path: 'dashboard', component:DashboardComponent },
        { path: 'progress', component:ProgressComponent},
        { path: 'grafica1', component: Grafica1Component },
        { path: '', redirectTo: '/dashboard', pathMatch:'full' },
      ]
  },
  */

  /*
    //se cambio a auth.routing.ts
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent},
  */
    
  //{ path: '' , component:PagesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: '**', component:NopagefoundComponent }, 
];


@NgModule({
  declarations: [],
  imports: [ 
    //rutas principales
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
