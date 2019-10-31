import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { PROJECTS_ROUTE, ProjectsComponent } from './';

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forRoot([PROJECTS_ROUTE], { useHash: true })],
  declarations: [ProjectsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppProjectsModule {}
