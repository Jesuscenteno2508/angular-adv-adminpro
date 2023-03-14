import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'  
})
export class AccountSettingsComponent implements OnInit {
   
  //este es un salto y hay que hacerlo la menor cantidad en el DOM
  public linkTheme = document.querySelector('#theme'); //es el id del html
   
//para obtenerlo por la clase  .NombreClase
  //public link!: NodeListOf<Element>;

  constructor(private _SettingService:SettingsService) { }

  ngOnInit(): void {
    //se paso al setting service
    //this.link = document.querySelectorAll('.selector')
    
    //this.checkcurrentTheme();
    this._SettingService.checkcurrentTheme();
  }

  ChangeTheme (theme: string){    
    // //console.log(theme); 
       
    // const  url =  `./assets/css/colors/${ theme }.css`
    // //console.log(url);
    // this.linkTheme?.setAttribute('href',url) ;
    // //para grabar en el theme en localstorage
    // localStorage.setItem('theme',url);

    this._SettingService.ChangeTheme(theme);

    //this.checkcurrentTheme(); //Metodo 1
    
   
  } 

    // se refactorizo en setting services
  //  checkcurrentTheme(){          
  //     console.log(this.link);

  //     this.link.forEach(ele => {
  //        ele.classList.remove('working');
  //        const  btnTheme = ele.getAttribute('data-theme');
  //        const btnTjemeUrl =`./assets/css/colors/${btnTheme}.css`;
  //        const currentTheme = this.linkTheme?.getAttribute('href');

  //       if (btnTjemeUrl == currentTheme){
  //         //agregar clase
  //         ele.classList.add('working');
  //       }
  //     });

  //  }


}
