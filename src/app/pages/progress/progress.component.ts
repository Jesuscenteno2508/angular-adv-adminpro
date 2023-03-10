import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.conponent.css']
  
})
export class ProgressComponent  {

   progreso1:number =40; 
   progreso2:number =60; 

   get getPorcentaje1(){
    return `${this.progreso1}%`;
  }

  get getPorcentaje2(){
    return `${this.progreso2}%`;
  }
 
  // cambioValorHijo(valory: number){
  //   this.progreso1 = valory;
  // }

}
