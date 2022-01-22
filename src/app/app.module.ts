import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import {TableModule} from "primeng/table";
import { PipeModule } from './pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailStudentComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
