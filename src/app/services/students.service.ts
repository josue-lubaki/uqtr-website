import { Injectable } from '@angular/core';
import {Score} from "../models/Score";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  listStudent: Student[];

  constructor() {
    this.listStudent = []
    this.listStudent.push(
      new Student('Josue', 'Lubaki', this.generateScore()),
      new Student('Jonathan', 'Gagnon', this.generateScore()),
      new Student('Ismael', 'Coulibaly', this.generateScore()),
      new Student('Jonathan', 'Kanyinda', this.generateScore()),
      new Student('Jordan', 'Kuibia', this.generateScore())
    );
  }

  /**
   * Methode qui permet de créer un étudiant
   * @param student étudiant à créer
   * */
  createStudent(student: Student){
    this.listStudent.push(student)
  }

  /**
   * Methode qui permet de supprimer un étudiant
   * @param student étudiant à supprimer
   * */
  deleteStudent(student: Student){
    this.listStudent.splice(this.listStudent.indexOf(student), 1)
  }

  /**
   * Methode qui permet de récupérer l'ensemble des étudiants
   * @return Student[]
   * */
  getStudents() : Student[] {
    return this.listStudent
  }

  /**
   * Methode qui permet de générer de manière aléatoire les scores (notes)
   * @return Score[]
   * */
  private generateScore(): Score[] {
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


}
