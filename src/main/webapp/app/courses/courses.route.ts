import { Route } from '@angular/router';

import { CoursesComponent } from './courses.component';

export const COURSES_ROUTE: Route = {
  path: 'courses',
  component: CoursesComponent,
  data: {
    authorities: [],
    pageTitle: 'courses.title'
  }
};
