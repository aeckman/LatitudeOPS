export type ApplicationId =
  | 'about-latitude-ops'
  | 'latitude-apps'
  | 'energy-grid-live'
  | 'tesla-fleet-api-rfg'
  | 'airplane-live-app'
  | 'harley-data-monitor';

export interface ApplicationDefinition {
  id: ApplicationId;
  title: string;
  icon: string;
}

export const APPLICATIONS: Record<ApplicationId, ApplicationDefinition> = {
  'about-latitude-ops': {
    id: 'about-latitude-ops',
    title: 'About LatitudeOPS',
    icon: '/assets/icons/computer.png'
  },
  'latitude-apps': {
    id: 'latitude-apps',
    title: 'Latitude Apps',
    icon: '/assets/icons/applications.png'
  },
  'energy-grid-live': {
    id: 'energy-grid-live',
    title: 'Energy Grid LIVE',
    icon: '/assets/icons/applications.png'
  },
  'tesla-fleet-api-rfg': {
    id: 'tesla-fleet-api-rfg',
    title: 'Tesla Fleet API RFG',
    icon: '/assets/icons/applications.png'
  },
  'airplane-live-app': {
    id: 'airplane-live-app',
    title: 'Airplane Live App',
    icon: '/assets/icons/applications.png'
  },
  'harley-data-monitor': {
    id: 'harley-data-monitor',
    title: 'Harley Data Monitor',
    icon: '/assets/icons/applications.png'
  }
};
