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

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: 
  [ //export para poder usar en otros componentes
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [UnoComponent]
})
export class MaterialModule { }
