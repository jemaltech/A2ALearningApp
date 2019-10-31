import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { CONTACT_US_ROUTE, ContactUsComponent } from './';

@NgModule({
  imports: [
    App2AutomateSharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    RouterModule.forRoot([CONTACT_US_ROUTE], { useHash: true })
  ],
  declarations: [ContactUsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2AutomateAppContactUsModule {}
