import { Component, input, output } from '@angular/core';
import { Clock } from '../clock/clock';
import { DesktopWindow } from '../window-system/desktop-window.model';

@Component({
  selector: 'app-taskbar',
  imports: [Clock],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss'
})
export class Taskbar {

  startMenuOpen = input(false);

  windows = input<readonly DesktopWindow[]>([]);

  activeWindowId = input<string | null>(null);

  startMenuToggleRequested = output<void>();

  windowButtonClicked = output<string>();

}
