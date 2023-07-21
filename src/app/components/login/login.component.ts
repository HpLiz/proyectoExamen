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
  disableLoginButton: boolean = false;
  warning: boolean = false;
  warningMessage: string = '';

  login(event: Event) {
    // alert(`email: ${this.email}, password: ${this.password}`);
    // this.validar();
    event.preventDefault();
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
      // alert();
      this.warningMessage = 'Todos los campos son obligatorios';
      this.warning = true;
      return false;
    }
    // valida nombre
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    if (!fullnameRegex.test(this.fullname)) {
      this.warningMessage = 'El nombre solo puede contener letras y numeros';
      this.warning = true;
      return false;
    }

    // validar password
    if (this.password.length < 6) {
      this.warningMessage =
        'la constraseña debe contener al menos 6 caracteres';
      this.warning = true;
      return false;
    }

    // validar email
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(this.email)) {
      this.warningMessage = 'Correo electrónico inválido.';
      this.warning = true;
      return false;
    }
    return true;
  }
}
