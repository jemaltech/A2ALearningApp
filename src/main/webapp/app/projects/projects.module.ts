import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { PROJECTS_ROUTE, ProjectsComponent } from './';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [App2AutomateSharedModule, FormsModule, NgbModule, RouterModule.forRoot([PROJECTS_ROUTE], { useHash: true })],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  bootstrap: [ProjectsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppProjectsModule {}
