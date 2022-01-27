import { Component, OnInit } from '@angular/core';
import { Student } from "../models/Student";
import { Router } from "@angular/router";
import { StudentsService } from "../services/students.service";

@Component({
  selector: 'app-students-lists',
  templateUrl: './students-lists.component.html',
  styleUrls: ['./students-lists.component.scss']
})
export class StudentsListsComponent implements OnInit {
  studentSelected?: Student;
  listStudent: Student[] = [];
  cp? : string | null; // code permanent

  constructor(private router: Router, private studentService: StudentsService){}

  /**
   * Methode qui permet de séléctionner l'étudiant dont on désire connaître les details
   * Envoyer son ID vers la page details
   * */
  public studentSelect(student: Student) {
    this.studentSelected = student;

    for(let i = 0; i < this.listStudent.length; i++) {
      if(this.listStudent[i].cp == student.cp)
        this.cp = this.listStudent[i].cp?.toLowerCase();
    }
    this.router.navigate(['/details', this.cp]);
  }


  ngOnInit(): void {
    this.initStudentList();
  }

  /**
   * Methode qui permet d'initialiser la liste des étudiants
   * */
  private initStudentList(){
    this.listStudent = this.studentService.getStudents();
  }

}
