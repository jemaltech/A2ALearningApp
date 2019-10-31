import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { AUTOMATION_ROUTE, AutomationComponent } from './';

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forRoot([AUTOMATION_ROUTE], { useHash: true })],
  declarations: [AutomationComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppAutomationModule {}
