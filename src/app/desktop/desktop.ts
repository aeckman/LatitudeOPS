import { Component, signal } from '@angular/core';
import {
  APPLICATIONS,
  ApplicationDefinition,
  ApplicationId
} from '../applications/application.model';
import { DesktopIcon } from '../icons/desktop-icon/desktop-icon';
import { PasswordDialog } from '../password-dialog/password-dialog';
import { Taskbar } from '../taskbar/taskbar';
import { StartMenu } from '../start-menu/start-menu';
import { DesktopWindow } from '../window-system/desktop-window.model';
import { WindowFrame } from '../window-system/window-frame/window-frame';

@Component({
  selector: 'app-desktop',
  imports: [DesktopIcon, Taskbar, StartMenu, WindowFrame, PasswordDialog],
  templateUrl: './desktop.html',
  styleUrl: './desktop.scss'
})
export class Desktop {

  menuOpen = signal(false);

  openWindows = signal<DesktopWindow[]>([]);

  activeWindowId = signal<string | null>(null);

  passwordDialogOpen = signal(false);

  private nextWindowId = 1;

  private nextZIndex = 1;

  readonly latitudeApplications: readonly ApplicationDefinition[] = [
    APPLICATIONS['energy-grid-live'],
    APPLICATIONS['tesla-fleet-api-rfg'],
    APPLICATIONS['airplane-live-app'],
    APPLICATIONS['harley-data-monitor']
  ];


  toggleStartMenu() {

    this.menuOpen.update((open) => !open);

  }


  selectApplication(applicationId: ApplicationId) {

    this.menuOpen.set(false);
    this.openApplication(applicationId);

  }


  openDesktopApplication(applicationId?: ApplicationId) {

    if (applicationId) {

      this.openApplication(applicationId);

    }

  }


  openPasswordDialog() {

    this.menuOpen.set(false);
    this.passwordDialogOpen.set(true);

  }


  closePasswordDialog() {

    this.passwordDialogOpen.set(false);

  }


  openApplication(applicationId: ApplicationId) {

    const existingWindow = this.openWindows().find(
      (window) => window.applicationId === applicationId
    );

    if (existingWindow) {

      this.activateWindow(existingWindow.id, true);
      return;

    }

    const application = APPLICATIONS[applicationId];
    const windowOffset = this.openWindows().length % 6;
    const windowId = `${applicationId}-${this.nextWindowId++}`;

    const desktopWindow: DesktopWindow = {
      id: windowId,
      applicationId,
      title: application.title,
      icon: application.icon,
      description: application.description,
      mode: 'normal',
      zIndex: this.nextZIndex++,
      bounds: {
        x: 120 + (windowOffset * 28),
        y: 70 + (windowOffset * 28),
        width: 520,
        height: 340
      }
    };

    this.openWindows.update((windows) => [...windows, desktopWindow]);
    this.activeWindowId.set(windowId);

  }


  focusWindow(windowId: string) {

    if (this.activeWindowId() === windowId) {

      return;

    }

    this.activateWindow(windowId);

  }


  minimizeWindow(windowId: string) {

    this.openWindows.update((windows) =>
      windows.map((window) =>
        window.id === windowId
          ? { ...window, mode: 'minimized' }
          : window
      )
    );

    if (this.activeWindowId() === windowId) {

      this.activateTopVisibleWindow();

    }

  }


  toggleMaximizeWindow(windowId: string) {

    const zIndex = this.nextZIndex++;

    this.openWindows.update((windows) =>
      windows.map((window) =>
        window.id === windowId
          ? {
              ...window,
              mode: window.mode === 'maximized' ? 'normal' : 'maximized',
              zIndex
            }
          : window
      )
    );

    this.activeWindowId.set(windowId);

  }


  closeWindow(windowId: string) {

    this.openWindows.update((windows) =>
      windows.filter((window) => window.id !== windowId)
    );

    if (this.activeWindowId() === windowId) {

      this.activateTopVisibleWindow();

    }

  }


  handleTaskbarWindowClick(windowId: string) {

    const desktopWindow = this.openWindows().find(
      (window) => window.id === windowId
    );

    if (!desktopWindow) {

      return;

    }

    if (
      desktopWindow.mode !== 'minimized' &&
      this.activeWindowId() === windowId
    ) {

      this.minimizeWindow(windowId);
      return;

    }

    this.activateWindow(windowId, true);

  }


  private activateWindow(windowId: string, restore = false) {

    const zIndex = this.nextZIndex++;

    this.openWindows.update((windows) =>
      windows.map((window) =>
        window.id === windowId
          ? {
              ...window,
              mode: restore && window.mode === 'minimized'
                ? 'normal'
                : window.mode,
              zIndex
            }
          : window
      )
    );

    this.activeWindowId.set(windowId);

  }


  private activateTopVisibleWindow() {

    const topWindow = this.openWindows()
      .filter((window) => window.mode !== 'minimized')
      .reduce<DesktopWindow | null>(
        (top, window) => !top || window.zIndex > top.zIndex ? window : top,
        null
      );

    this.activeWindowId.set(topWindow?.id ?? null);

  }


  icons: ReadonlyArray<{
    image: string;
    label: string;
    applicationId?: ApplicationId;
  }> = [

    {
      image: '/assets/icons/computer.png',
      label: 'My Computer',
      applicationId: 'about-latitude-ops'
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
      label: 'Latitude Apps',
      applicationId: 'latitude-apps'
    }

  ];

}
