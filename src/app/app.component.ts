import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string = '';
  password: string = '';

  login() {
    alert(`email: ${this.email}, password: ${this.password}`);
  }
}
