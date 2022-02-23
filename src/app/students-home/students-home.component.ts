import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.scss'],
})
export class StudentsHomeComponent implements OnInit {
  studentSelected?: Student;
  listStudent: Student[] = [];
  index: number;

  constructor(private studentService: StudentsService) {
    this.index = -1;
  }

  next(inc: number) {
    // reverse with modulo (cyclique list) left and right
    if (this.index + inc > 0) {
      this.index = (this.index + inc) % this.listStudent.length;
    } else {
      this.index = this.listStudent.length - 1;
    }
  }

  ngOnInit(): void {
    this.initStudentList();
  }

  /**
   * Methode qui permet d'initialiser la liste des étudiants
   * */
  private initStudentList() {
    this.listStudent = this.studentService.getStudents();
  }

  /**
   * Methode qui permet de séléctionner l'étudiant dont on désire connaître les details
   * */
  public studentSelect(student: Student) {
    this.studentSelected = student;
    // find index of student
    this.index = this.listStudent.findIndex(
      (student) => student.cp === this.studentSelected?.cp
    );
  }
}
