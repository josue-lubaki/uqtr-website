import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsHomeComponent} from "./students-home.component";
import {TableModule} from "primeng/table";
import {PipeModule} from "../pipes/pipe.module";
import {DetailStudentComponent} from "../detail-student/detail-student.component";


@NgModule({
  declarations: [StudentsHomeComponent, DetailStudentComponent],
  imports: [
    CommonModule,
    TableModule,
    PipeModule
  ],
  exports: [DetailStudentComponent]
})
export class StudentHomeModule { }
