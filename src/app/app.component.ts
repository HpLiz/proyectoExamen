import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string = '';
  password: string = '';
  fullname: string = '';
  regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  // regex

  login() {
    // alert(`email: ${this.email}, password: ${this.password}`);
    this.validar();
    console.log({
      email: this.email,
      password: this.password,
    });
  }

  validar() {
    if (!this.fullname || !this.password || !this.email) {
      alert('Todos los campos son obligatorios');
    }
    // valida nombre
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    if (!fullnameRegex.test(this.fullname)) {
      alert('El nombre solo puede contener letras y numeros');
    }

    // validar password
    if (this.password.length < 6) {
      alert('la constraseña debe contener al menos 6 caracteres');
    }

    // validar email
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(this.email)) {
      alert('Correo electrónico inválido.');
    }
  }
}
