import { ApplicationId } from '../applications/application.model';

export type DesktopWindowMode = 'normal' | 'minimized' | 'maximized';

export interface WindowBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DesktopWindow {
  id: string;
  applicationId: ApplicationId;
  title: string;
  icon: string;
  mode: DesktopWindowMode;
  zIndex: number;
  bounds: WindowBounds;
}
