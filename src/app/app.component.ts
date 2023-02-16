import { Component, OnInit } from '@angular/core';
import { ProyectosModelo } from './models/proyectos.modelo';
import { ServicioService } from './services/api/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'checkpoint';
  isLogged = false;

  public proyecto!: ProyectosModelo;
  public coursesData: any;

  //constructor (private servicioService: ServicioService){}

  ngOnInit(): void {
    this.proyecto = {id: 1, nombre: "Proyecto Encuesta", nombrecorto: "PE"}
    //this.consultaCurso();
  }

  /*consultaCurso(): void {
    this.servicioService.getCursos().subscribe( res => {
      console.log(res);
      this.coursesData = res;
    }, (error: any) => {
      console.log(error)
    })
  }*/

 
}
