import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { COURSES_ROUTE, CoursesComponent } from './';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [App2AutomateSharedModule, FormsModule, RouterModule.forRoot([COURSES_ROUTE], { useHash: true })],
  declarations: [CoursesComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppCoursesModule {}
