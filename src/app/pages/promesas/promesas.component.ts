import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios()
      .then( Usu => {
          console.log(Usu);
      })

  //   const promesa = new Promise((resolve,reject) => {
  //     if (true){
  //       resolve('True si paso hola mindi');
  //     }else{
  //       reject('añgo salio mal');
  //     }
  //   });

  //   promesa
  //     .then((mensaje) => {
  //         console.log(mensaje + ' Then');
  //       })
  //     .catch(error => console.log('Error en el proceso'));

  //   console.log('Fin de log');


     

   }

     //funciones que retornan promesas
     getUsuarios(){

       //const promesa = new Promise( resolve => {
        return  new Promise( resolve => {
        fetch('https://reqres.in/api/users')
        .then( resp => resp.json() ) 
        .then( body => resolve(body.data));

       }) 

       //return promesa; 

          // fetch('https://reqres.in/api/users')
          //     .then( resp => resp.json() ) //tambien es una promesa y regresa como no tiene llaves 
          //     .then( body => console.log(body.data));
          //de body a body.data para solo regresar el arreglo  
          //.then(resp => {
          //  resp.json().then( body => console.log(body ))
      //viene como ReadableStream

    }

}
