import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mini Calculadora';
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = Number(this.num1) + Number(this.num2);
  }
}
