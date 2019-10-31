import { Route } from '@angular/router';

import { ManualComponent } from './manual.component';

export const MANUAL_ROUTE: Route = {
  path: 'manual',
  component: ManualComponent,
  data: {
    authorities: [],
    pageTitle: 'manual.title'
  }
};
