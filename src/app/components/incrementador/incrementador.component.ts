import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{

  constructor() { }
  ngOnInit(): void {
    this.btnclass = `btn ${this.btnclass}`;
  }


   //@Input() progreso:number =33; //por default envia 30 y obedece al parametro progreso
   @Input('valor1') progreso:number =33; //progreso se renombra por valor1
   @Input() btnclass:string='btn-primary'; 
   //@Output()  valorSalida: EventEmitter<number> = new EventEmitter(); //es un evento
   @Output('valor2')  valorSalida: EventEmitter<number> = new EventEmitter(); //es un evento
   valor:number = 0; 
 
  // get getPorcentaje(){
  //     return `${this.progreso}%`
  // }

  CambiarValor(valorx: number){
       this.valor = valorx;
      if (this.progreso + valorx >= 100){
        this.valorSalida?.emit(100);
        this.progreso = 100;
      }else if (this.progreso  + valorx <= 0){
        this.progreso = 0;
        this.valorSalida?.emit(0);
      }else {        
        this.progreso =this.progreso + this.valor;
        this.valorSalida?.emit(this.progreso);
      }
      
  }

    //onChange(event: any){ NuevoValor: number
    onChange(NuevoValor: number){
       // NuevoValor: number 
      if(NuevoValor >=100){
        this.progreso = 100;
      }else if(NuevoValor >= 0){
        this.progreso = 0
      }else{
        this.progreso = NuevoValor;
      }


      //console.log('Event 👉',event);
      console.log('NVal 🔔',NuevoValor);
      //this.valorSalida.emit(event);
      this.valorSalida.emit(this.progreso);
    }

}
