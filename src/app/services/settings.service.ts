import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private  linkTheme = document.querySelector('#theme'); //es el id del html
  constructor() { 
    
    const urlx  = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';    
    //Asigno la url de themecuando carga 
    this.linkTheme?.setAttribute('href',  urlx );
    //console.log('Service Setting Init 👍');
  }

  //cambiar el tema
  ChangeTheme (theme: string){    
    //console.log(theme); 
       
    const  url =  `./assets/css/colors/${ theme }.css`
    //console.log(url);
    this.linkTheme?.setAttribute('href',url) ;
    //para grabar  el theme en localstorage
    localStorage.setItem('theme',url);
    //this.checkcurrentTheme(); //Metodo 1
    this.checkcurrentTheme();
  } 

  //refactorizar check
  checkcurrentTheme(){
      
    //no se debe de saltar de de esta manera al DOM, pero como son 10 es poco
    const  link = document.querySelectorAll('.selector')
   // console.log(this.link);

      link.forEach(ele => {
       ele.classList.remove('working');
       const  btnTheme = ele.getAttribute('data-theme');
       const btnTjemeUrl =`./assets/css/colors/${btnTheme}.css`;
       const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnTjemeUrl == currentTheme){
        //agregar clase
        ele.classList.add('working');
      }
    });
 }
}
