import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.App2AutomateAdminModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.App2AutomateAccountModule)
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class App2AutomateAppRoutingModule {}
