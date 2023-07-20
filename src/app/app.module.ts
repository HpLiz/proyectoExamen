import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  // { path: '', component: InicioComponent },
  { path: 'recientes', component: RecientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirige al login si la ruta no se encuentra
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RecientesComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
