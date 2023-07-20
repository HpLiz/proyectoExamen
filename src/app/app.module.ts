import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { InicioComponent } from './components/inicio/inicio.component';


const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'recientes', component: RecientesComponent }
];

@NgModule({
  declarations: [AppComponent,
    InicioComponent,
    RecientesComponent],
  imports: [BrowserModule, AppRoutingModule,
    RouterModule.forRoot(rutas),
    MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

