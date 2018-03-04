import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutasModule } from './rutas/rutas.module';
import { LoginComponent } from './componentes/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ //nuestros compoentes
    AppComponent, LoginComponent
  ],
  imports: [// dependencias del modulo
    BrowserModule,RutasModule,
    BrowserAnimationsModule  // para animaciones 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
