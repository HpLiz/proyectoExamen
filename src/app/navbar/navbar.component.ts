import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  fullname: any = sessionStorage.getItem('fullname');

  // TODO funcion para cerrar sesion
  // sessionStorage.removeItem(Apellido) nombre completo, email
  logout() {
    sessionStorage.clear();
  }
}
