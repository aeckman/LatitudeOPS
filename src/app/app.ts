import { Component, signal } from '@angular/core';
import { Boot } from './boot/boot';
import { Desktop } from './desktop/desktop';

@Component({
  selector: 'app-root',
  imports: [Boot, Desktop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  showBoot = signal(true);

  constructor() {
    setTimeout(() => {
      this.showBoot.set(false);
    }, 2000);
  }

}