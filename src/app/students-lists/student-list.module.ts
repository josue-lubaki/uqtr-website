import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {PipeModule} from "../pipes/pipe.module";
import {DetailStudentComponent} from "../detail-student/detail-student.component";
import {StudentsListsComponent} from "./students-lists.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PipeModule
  ],
  exports: [PipeModule]
})
export class StudentListModule { }
