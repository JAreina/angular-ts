import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from '../componentes/material/uno/uno.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
 
  {path:'uno',
  component: UnoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
