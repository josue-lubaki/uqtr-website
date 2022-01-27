import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentHomeModule} from "./students-home/student-home.module";
import {StudentsListsComponent} from "./students-lists/students-lists.component";
import {TableModule} from "primeng/table";
import {StudentListModule} from "./students-lists/student-list.module";

@NgModule({
  declarations: [StudentsListsComponent],
  imports: [
    StudentHomeModule,
    StudentListModule,
    CommonModule,
    TableModule,
  ],
})
export class RootModule { }
