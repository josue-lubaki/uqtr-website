import { Component, OnInit } from '@angular/core';
import { Score } from './models/Score';
import { Student } from './models/Student';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'uqtr-app';
  listStudent: Student[] = [];

  constructor(private studentService: StudentsService){}

  ngOnInit(): void {
    this.listStudent = this.studentService.getStudents()
  }
}
