import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class App2AutomateHomeModule {}
