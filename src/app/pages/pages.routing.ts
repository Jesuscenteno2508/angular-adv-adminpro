import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [


     //dentro de este van estar las rutas protegidas
  {   path: 'dashboard' , component:PagesComponent
    //definir rutas hijas del componente de arriba
    ,children:[
            { path: '', component:DashboardComponent },
            { path: 'progress', component:ProgressComponent},
            { path: 'grafica1', component: Grafica1Component },
            { path: 'account-settings', component:AccountSettingsComponent },
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
