import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const rutas: Routes = [
  // { path: '', component: InicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirige al login si la ruta no se encuentra
  { path: 'recientes', component: RecientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'registros-api', component: ViewRegistrosComponent },
  { path: 'pokemon-api', component: ViewPokemonComponent },
  { path: 'pokemon-list', component: ViewPokemonListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecientesComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    NavbarComponent,
    AlertComponent,
    DrawerComponent,
    ViewRegistrosComponent,
    ViewPokemonComponent,
    ViewPokemonListComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
