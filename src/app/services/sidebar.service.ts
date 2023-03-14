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
