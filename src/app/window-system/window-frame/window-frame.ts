import { Component, input, output } from '@angular/core';
import { DesktopWindow } from '../desktop-window.model';

@Component({
  selector: 'app-window-frame',
  imports: [],
  templateUrl: './window-frame.html',
  styleUrl: './window-frame.scss'
})
export class WindowFrame {

  window = input.required<DesktopWindow>();

  active = input(false);

  focusRequested = output<string>();

  minimizeRequested = output<string>();

  maximizeRequested = output<string>();

  closeRequested = output<string>();

  requestFocus() {

    this.focusRequested.emit(this.window().id);

  }

  requestMinimize(event: MouseEvent) {

    event.stopPropagation();
    this.minimizeRequested.emit(this.window().id);

  }

  requestMaximize(event: MouseEvent) {

    event.stopPropagation();
    this.maximizeRequested.emit(this.window().id);

  }

  requestClose(event: MouseEvent) {

    event.stopPropagation();
    this.closeRequested.emit(this.window().id);

  }

}
