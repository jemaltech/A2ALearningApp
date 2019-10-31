import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { ABOUT_US_ROUTE } from './about-us.route';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forRoot([ABOUT_US_ROUTE], { useHash: true })],
  declarations: [AboutUsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppAboutUsModule {}
