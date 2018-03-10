import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './uno/uno.component';

//importo para crear el toolbar
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: 
  [ //export para poder usar en otros componentes
    MatToolbarModule
  ],
  declarations: [UnoComponent]
})
export class MaterialModule { }