import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App2AutomateSharedModule } from 'app/shared/shared.module';
import { EntryComponent } from './entry.component';
import { EntryDetailComponent } from './entry-detail.component';
import { EntryUpdateComponent } from './entry-update.component';
import { EntryDeletePopupComponent, EntryDeleteDialogComponent } from './entry-delete-dialog.component';
import { entryRoute, entryPopupRoute } from './entry.route';

const ENTITY_STATES = [...entryRoute, ...entryPopupRoute];

@NgModule({
  imports: [App2AutomateSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [EntryComponent, EntryDetailComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
  entryComponents: [EntryDeleteDialogComponent]
})
export class App2AutomateEntryModule {}
