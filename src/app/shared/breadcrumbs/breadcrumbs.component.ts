import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit ,OnDestroy {

  public titulo!: string;
  public Subtitulo!: string;
  public tituloSub!: Subscription;

  constructor(private _router:Router) {
      this.tituloSub =  this.getArgRuta()   
                             .subscribe(data => {    //ya no es evento es data
                              //se debe de subscribor cuando se vaya a login
                              console.log(data) 
                              this.titulo =  data.titulo ;
                              this.Subtitulo =  data.objeto ;
                              document.title = `Admin Pro - ${ data.titulo }`
                            }); 
   }
  ngOnDestroy(): void {
    this.tituloSub.unsubscribe();
  }

    getArgRuta(){
           //aparecen dos fistCgild esta en null que es el hijo que interesa
     return this._router.events
          .pipe(
            filter(event => event instanceof ActivationEnd ),
            filter( ( event:any ) => event.snapshot.firstChild == null ),
            map( (event:any ) => event.snapshot.data  )  ,
            //filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
          )
          // .subscribe(data => {    //ya no es evento es data
          //   //se debe de subscribor cuando se vaya a login
          //   console.log(data) 
          //   this.titulo =  data.titulo ;
          //   this.Subtitulo =  data.objeto ;
          //   document.title = `Admin Pro - ${ data.titulo }`
          //  }); 
          //.subscribe(event => { console.log(event) });  //busca los eventos ActionEnd

    }

  ngOnInit(): void {
  }

}
