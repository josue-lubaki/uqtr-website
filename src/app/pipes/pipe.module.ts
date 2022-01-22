import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AverangePipe } from './averange.pipe';
import { NotesPipe } from './notes.pipe';

@NgModule({
  declarations: [AverangePipe, NotesPipe],
  imports: [BrowserModule],
  providers: [],
  exports: [AverangePipe, NotesPipe],
})
export class PipeModule {}
