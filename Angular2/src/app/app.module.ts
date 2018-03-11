import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './componentes/material/material.module';
//import { RutasRoutingModule } from './rutas/rutas-routing.module';
import { RouterModule } from '@angular/router';

import {RutasRoutingModule }  from './rutas/rutas-routing.module';

@NgModule({
  declarations: [ //nuestros compoentes
    AppComponent
  ],
  imports: [// dependencias del modulo
    BrowserModule,
    RutasRoutingModule,
    BrowserAnimationsModule,
    MaterialModule  // para animaciones 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
