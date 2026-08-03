import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.html',
  styleUrl: './desktop-icon.scss'
})
export class DesktopIcon {

  image = input('');
  label = input('');

  activated = output<void>();

}
