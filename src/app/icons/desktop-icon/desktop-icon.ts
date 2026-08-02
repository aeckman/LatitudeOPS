import { Component, input } from '@angular/core';

@Component({
  selector: 'app-desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.html',
  styleUrl: './desktop-icon.scss'
})
export class DesktopIcon {

  image = input('');
  label = input('');

}