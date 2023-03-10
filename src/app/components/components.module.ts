import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule  } from '@angular/forms'


@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IncrementadorComponent    //como se va a utiliar en otro modulo se  exporta
  ]
})
export class ComponentsModule { }
