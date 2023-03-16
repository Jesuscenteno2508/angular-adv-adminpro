import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { retry ,take ,map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs!: Subscription;

  constructor() { 
   

    //escucha - activa
    // obs$.subscribe(
    //     (valor:any) => console.log('subs:', valor ) ,
    //   (error) => console.log('Error: ' , error),
    //   () => void console.info('Obs terminado')
    // );

    //metodo retry cuando el observador falla el error y se vuelve a intentar
    //lo va estar intentando una y otra vez
    //this.obs$.pipe(
      
    //   this.retornaObservabable().pipe(
    //     retry(3)  
    // ).subscribe({
    //     next: (valor) => { console.log('subs:', valor )} ,     
    //     error: (error) => { console.log('Error x: ' , error) },
    //     complete: () =>{ console.info('Obs terminado') }
    // });
       this.intervalSubs =   this.retornaIntervalo()
            .subscribe(console.log)
      //   .subscribe({
      //     next: (valor) => { console.log('Valor 👉:',valor) }
      // }); 

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe(); //cancela el observable 
    //si no se cancela puede haber una fuga de memoria
  }

    //observable vivo hasta que algo suceda unsuscribe
    //cancelar observable 

    //filter filtar info dentro del observable

  //take cuantas veces se va a ejecutar 
  retornaIntervalo(): Observable<string>{
    //refactorizar
   return interval(1000)
          .pipe(  
                take(10),  //es importante el orden de los rxjs              
                //map(valor =>   'Hola mundo ' + (valor + 1) ),  //concatenar formato
                filter(valor => (valor % 2 === 0) ? true : false ), //el valor es del anterior, depende tipo de dato, condicion
                map(valor =>   'Hola mundo ' + (valor + 1) ),  //concatenar formato
                //take(10),  //es importante el orden de los rxjs
          ) ;
    


    // const intervalo$ = interval(1000)
    //                       .pipe(
    //                         take(4),map(valor => { return 'Hola mundo ' + (valor + 1)})  //concatenar formato
    //                       ) ;
    // return intervalo$;  //como es observablse se agrega $
  }

  retornaObservabable():Observable<number>{
       //observable
    let i = -1;
    //const  obs$ = new Observable<number>(observer => {
      return  new Observable<number>(observer => {
     
       const intervalo = setInterval( () => {
          i++;
          observer.next(i);
          //console.log('tick');
          if(i === 4){
              clearInterval(intervalo) ;
              observer.complete();
          }
          if(i===2){
            //i=0;
            observer.error('valor de 2 error');
          }  //ya no llega al complete cuando hay error

       },1000)
       
    });
     //return obs$; //se elimina la declaracion const
  }

  ngOnInit(): void {
  }

}
