import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';
  fullname: string = '';

  login() {
    // alert(`email: ${this.email}, password: ${this.password}`);
    // this.validar();
    const user: object = {
      email: this.email,
      password: this.password,
      fullname: this.fullname,
    };

    if (this.validar()) {
      sessionStorage.setItem('email', this.email);
      // sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('fullname', this.fullname);

      this.router.navigate(['/home']);
    }
  }

  validar() {
    if (!this.fullname || !this.password || !this.email) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    // valida nombre
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    if (!fullnameRegex.test(this.fullname)) {
      alert('El nombre solo puede contener letras y numeros');
      return false;
    }

    // validar password
    if (this.password.length < 6) {
      alert('la constraseña debe contener al menos 6 caracteres');
      return false;
    }

    // validar email
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(this.email)) {
      alert('Correo electrónico inválido.');
      return false;
    }
    return true;
  }
}
