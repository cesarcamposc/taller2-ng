import { Component, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',  
})
export class App {
  protected readonly title = signal('hola, estamos en angular!');
}
