import { Route } from '@angular/router';

import { AutomationComponent } from './automation.component';

export const AUTOMATION_ROUTE: Route = {
  path: 'automation',
  component: AutomationComponent,
  data: {
    authorities: [],
    pageTitle: 'automation.title'
  }
};
