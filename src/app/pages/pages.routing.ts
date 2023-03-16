import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [


     //dentro de este van estar las rutas protegidas
  {   path: 'dashboard' , component:PagesComponent
    //definir rutas hijas del componente de arriba
    ,children:[
            //parametros de ruta
            { path: '', component:DashboardComponent, data: {titulo: 'Dashboard', objeto:'Principal'} },             
            { path: 'progress', component:ProgressComponent , data: {titulo: 'Progress', objeto:'Progress1'}},
            { path: 'grafica1', component: Grafica1Component , data: {titulo: 'Grafica', objeto:'Grafica1'}},
            { path: 'account-settings', component:AccountSettingsComponent , data: {titulo: 'Configuracion', objeto:'Configuracion1'}},
            { path: 'promesas', component:PromesasComponent , data: {titulo: 'Promesa', objeto:'Promesa1'}},
            { path: 'rxjs', component:RxjsComponent , data: {titulo: 'Rxjs', objeto:'Rxjs1'}},
            //  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
        ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
