import { Component, OnInit } from '@angular/core';
import {Student} from "../models/Student";
import {StudentsService} from "../services/students.service";

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.scss']
})
export class StudentsHomeComponent implements OnInit {
  studentSelected?: Student;
  listStudent: Student[] = [];

  constructor(private studentService: StudentsService){

  }

  ngOnInit(): void {
    this.initStudentList();
  }

  /**
   * Methode qui permet d'initialiser la liste des étudiants
   * */
  private initStudentList() {
    this.listStudent =  this.studentService.getStudents();
  }

  /**
   * Methode qui permet de séléctionner l'étudiant dont on désire connaître les details
   * */
  public studentSelect(student: Student) {
    this.studentSelected = student;
  }

}
