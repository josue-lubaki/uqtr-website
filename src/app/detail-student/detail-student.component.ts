import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Student } from '../models/Student';
import { Score } from '../models/Score';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
})
export class DetailStudentComponent implements OnInit, OnChanges {
  @Input()
  detail?: Student;

  @Output()
  navRequest = new EventEmitter<number>();

  @Input()
  indexSelected: number;
  cp?: string | null; // code permanent
  max?: number;
  min?: number;
  isFounded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) {
    this.indexSelected = 1;
  }

  ngOnInit(): void {
    // récupération de l'ID reçu en paramètre
    this.route.paramMap.subscribe((params) => {
      this.cp = params.get('cp') || null;
    });

    this.initStudent();
  }

  /**
   * Methode qui permet d'afficher les informations de l'étudiant dont l'ID est passé en paramètre
   * Ensuite calculer sa note mac et min
   * */
  private initStudent() {
    const list = this.studentService.getStudents();
    for (let i = 0; i < list.length; i++) {
      if (list[i].cp?.toLowerCase() == this.cp) {
        this.detail = list[i];
        this.isFounded = true;

        // calculer le max et min
        this.max = Math.max(
          ...this.detail.scores.map((score: Score) => score.value)
        );
        this.min = Math.min(
          ...this.detail.scores.map((score: Score) => score.value)
        );
      }
    }

    if (!this.isFounded) {
      this.router.navigate(['']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];

        // S'intéresser au second changement
        if (!changedProp.isFirstChange()) {
          // trouver l'étudiant de l'index currentValue
          const student =
            this.studentService.getStudents()[changedProp.currentValue];

          // afficher les informations de l'étudiant
          this.detail = student;

          // calculer le max et min if student exist
          if (this.detail) {
            // Trouver la meilleure note
            this.max = Math.max(
              ...this.detail.scores.map((score: Score) => score.value)
            );

            // Trouver la note la plus mediocre
            this.min = Math.min(
              ...student.scores.map((score: Score) => score.value)
            );
          }
        }
      }
    }
  }
}
