import { Component, output } from '@angular/core';
import { Clock } from '../clock/clock';

@Component({
  selector: 'app-taskbar',
  imports: [Clock],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss'
})
export class Taskbar {

  startClicked = output();

}