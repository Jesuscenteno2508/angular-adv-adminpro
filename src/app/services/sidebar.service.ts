import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class SidebarService {

  menu: any[] = [
    {
      titulo:'Dashboard!!!',
      icono:'mdi mdi-gauge' ,
      submenu:[
        { tiulo1: 'Main', url:'/'},
        { tiulo1: 'ProgressBar', url:'progress'},
        { tiulo1: 'Graficas', url:'grafica1'},
        { tiulo1: 'Promesas', url:'promesas'},
        { tiulo1: 'rxjs', url:'rxjs'},
      ]
    },
    {
      titulo:'Dashboard222',
      icono:'mdi mdi-gauge' ,
      submenu:[
        { tiulo1: 'Main', url:'/'},
        { tiulo1: 'ProgressBar', url:'progress'},
        { tiulo1: 'Graficas', url:'grafica1'},
      ]
    }
  ]; 

  constructor() { }
}
