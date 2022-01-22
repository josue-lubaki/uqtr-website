import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Student } from '../models/Student';
import { Score } from '../models/Score';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
})
export class DetailStudentComponent implements OnInit, OnChanges {
  @Input()
  detail?: Student;

  max?: number;
  min?: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if(changes.hasOwnProperty(propName)){
        const changedProp = changes[propName];

        // S'intéresser au second changement
        if (!changedProp.isFirstChange()) {
          // Trouver la meilleur note
          this.max = Math.max(
            ...changedProp.currentValue.scores.map((score: Score) => score.value)
          );

          // Trouver la note la plus mediocre
          this.min = Math.min(
            ...changedProp.currentValue.scores.map((score: Score) => score.value)
          );
        }
      }
    }
  }
}
