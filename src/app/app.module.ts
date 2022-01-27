import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableModule} from "primeng/table";
import { PipeModule } from './pipes/pipe.module';
import {RouterModule, Routes} from "@angular/router";
import {RootModule} from "./root.module";
import {StudentsListsComponent} from "./students-lists/students-lists.component";
import {DetailStudentComponent} from "./detail-student/detail-student.component";
import {StudentsHomeComponent} from "./students-home/students-home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes : Routes = [
  { path : "lists", component: StudentsListsComponent },
  { path: "details/:cp", component: DetailStudentComponent },
  { path: "", component: StudentsHomeComponent },
  { path : "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
