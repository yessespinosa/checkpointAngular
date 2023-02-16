import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './rutas/personas/personas.component';
import { ProyectosComponent } from './rutas/proyectos/proyectos.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "proyectos", component: ProyectosComponent}, 
  { path: "personas", component: PersonasComponent, canActivate: [AuthGuard] },
  //{ path: "", redirectTo: '/proyectos', pathMatch: 'full'}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
