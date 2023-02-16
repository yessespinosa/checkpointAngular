import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonasComponent } from './rutas/personas/personas.component';
import { ProyectosComponent } from './rutas/proyectos/proyectos.component';
import { HeaderComponent } from './views/header/header.component';
import { BodyComponent } from './views/body/body.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PersonasComponent,
    ProyectosComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
