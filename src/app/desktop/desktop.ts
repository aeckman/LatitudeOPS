import { Component } from '@angular/core';
import { DesktopIcon } from '../icons/desktop-icon/desktop-icon';
import { Taskbar } from '../taskbar/taskbar';
import { StartMenu } from '../start-menu/start-menu';
import { PasswordDialog } from '../password-dialog/password-dialog';

@Component({
  selector: 'app-desktop',
  imports: [DesktopIcon, Taskbar, StartMenu, PasswordDialog],
  templateUrl: './desktop.html',
  styleUrl: './desktop.scss'
})
export class Desktop {

  menuOpen = false;

  passwordDialogOpen = false;


  toggleStartMenu() {

    this.menuOpen = !this.menuOpen;

  }


  openPasswordDialog() {

    this.passwordDialogOpen = true;

  }


  closePasswordDialog() {

    this.passwordDialogOpen = false;

  }


  icons = [

    {
      image: '/assets/icons/computer.png',
      label: 'My Computer'
    },

    {
      image: '/assets/icons/documents.png',
      label: 'Documents'
    },

    {
      image: '/assets/icons/recycle-bin.png',
      label: 'Recycle Bin'
    },

    {
      image: '/assets/icons/internet.png',
      label: 'Internet'
    },

    {
      image: '/assets/icons/settings.png',
      label: 'Control Panel'
    },

    {
      image: '/assets/icons/applications.png',
      label: 'Latitude Apps'
    }

  ];

}