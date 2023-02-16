import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';


@NgModule({
  declarations: [
    PersonasComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [PersonasComponent]
})
export class PersonasModule { }
