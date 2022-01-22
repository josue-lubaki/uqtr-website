import { Component, OnInit } from '@angular/core';
import { Score } from './models/Score';
import { Student } from './models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  numbers: number[] = [];
  studentSelected?: Student;
  title: string = 'uqtr-app';
  listStudent: Student[] = [];

  /**
   * ajouter des valeurs aléatoire entre 0 et 100 dans numbers
   * */
  addNumber() {
    this.numbers.push(Math.floor(Math.random() * 100));
  }

  public studentSelect(student: Student) {
    this.studentSelected = student;
  }

  /**
   * Methode qui permet de générer de manière aléatoire les scores
   * @return Score[]
   * */
  generateScore(): Score[] {
    let scores = [];

    // Math.floor(Math.random() * (max - min + 1) + min) -> max included
    // Math.floor(Math.random() * (max - min) + min) -> max excluded
    scores.push(
      new Score('Anglais', Math.floor(Math.random() * (100 - 40)) + 40)
    );
    scores.push(new Score('Math', Math.floor(Math.random() * (100 - 40)) + 40));
    scores.push(
      new Score('Histoire', Math.floor(Math.random() * (100 - 40)) + 40)
    );
    scores.push(
      new Score('Français', Math.floor(Math.random() * (100 - 40)) + 40)
    );
    return scores;
  }

  ngOnInit(): void {
    this.listStudent.push(
      new Student('Josue', 'Lubaki', 'LUBJ111111', this.generateScore()),
      new Student('Jonathan', 'Gagnon', 'GAGJ111111', this.generateScore())
    );
  }
}
