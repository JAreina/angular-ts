import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutasModule } from './rutas/rutas.module';

@NgModule({
  declarations: [ //nuestros compoentes
    AppComponent
  ],
  imports: [// dependencias del modulo
    BrowserModule,RutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
