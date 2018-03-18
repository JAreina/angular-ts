import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './uno/uno.component';

//importo para crear el toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//importar boton
import {MatButtonModule} from '@angular/material/button';
//importar iconos
import {MatIconModule} from '@angular/material/icon';
//menu
import {MatMenuModule} from '@angular/material/menu';
//panel 
import {MatExpansionModule} from '@angular/material/expansion';
import { BotonComponent } from './boton/boton.component';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: 
  [ //export para poder usar en otros componentes
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatInputModule
  ],
  declarations: [UnoComponent, BotonComponent, InputComponent]
})
export class MaterialModule { }
