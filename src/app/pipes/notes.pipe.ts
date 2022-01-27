import { Pipe, PipeTransform } from '@angular/core';
import { NOTE } from '../models/Note';

@Pipe({
  name: 'notes',
})
export class NotesPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= NOTE.Ap) {
      return 'A+';
    } else if (value >= NOTE.A) {
      return 'A';
    } else if (value >= NOTE.Am) {
      return 'A-';
    } else if (value >= NOTE.Bp) {
      return 'B+';
    } else if (value >= NOTE.B) {
      return 'B';
    } else if (value >= NOTE.Bm) {
      return 'B-';
    } else if (value >= NOTE.Cp) {
      return 'C+';
    } else if (value >= NOTE.C) {
      return 'C';
    } else if (value >= NOTE.Cm) {
      return 'C-';
    } else if (value >= NOTE.Dp) {
      return 'D+';
    } else if (value >= NOTE.D) {
      return 'D';
    } else {
      return 'E';
    }
  }
}
