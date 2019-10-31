import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { MANUAL_ROUTE, ManualComponent } from './';

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forRoot([MANUAL_ROUTE], { useHash: true })],
  declarations: [ManualComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppManualModule {}
