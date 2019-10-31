import { Route } from '@angular/router';

import { CalenderComponent } from './calender.component';

export const CALENDER_ROUTE: Route = {
  path: 'calender',
  component: CalenderComponent,
  data: {
    authorities: [],
    pageTitle: 'calender.title'
  }
};
