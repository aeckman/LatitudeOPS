import { Component, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.scss'
})
export class Clock implements OnDestroy {

  time = signal('');

  private timer: any;


  constructor() {

    this.updateTime();

    this.timer = setInterval(() => {

      this.updateTime();

    }, 1000);

  }


  updateTime() {

    const now = new Date();

    this.time.set(
      now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      })
    );

  }


  ngOnDestroy() {

    clearInterval(this.timer);

  }

}