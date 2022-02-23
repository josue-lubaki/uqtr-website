import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentHomeModule} from "./students-home/student-home.module";
import {StudentsListsComponent} from "./students-lists/students-lists.component";
import {TableModule} from "primeng/table";
import {StudentListModule} from "./students-lists/student-list.module";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [StudentsListsComponent, FormulaireComponent],
  imports: [
    StudentHomeModule,
    StudentListModule,
    CommonModule,
    TableModule,
    ReactiveFormsModule,
  ],
})
export class RootModule { }
