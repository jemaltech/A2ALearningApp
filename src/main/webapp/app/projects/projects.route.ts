import { Route } from '@angular/router';

import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTE: Route = {
  path: 'projects',
  component: ProjectsComponent,
  data: {
    authorities: [],
    pageTitle: 'projects.title'
  }
};
