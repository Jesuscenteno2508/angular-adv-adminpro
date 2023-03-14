import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  //public linkTheme = document.querySelector('#theme'); //es el id del html
 
  constructor(private _SettingsService:SettingsService) { }

  ngOnInit(): void {
    //urlx:String;
    //this.linkTheme?.setAttribute('href','./assets/css/colors/green-dark.css');
    //obtengo lo que se tienen de localStorage en 
    //caso de no haber nada se asigna uno por default
  //  const urlx  = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';
    
    //Asigno la url de themecuando carga 
    //this.linkTheme?.setAttribute('href',  urlx );
     //href="./assets/css/colors/green-dark.css"

     customInitFunctions();
  }

}





