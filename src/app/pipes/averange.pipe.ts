import { Pipe, PipeTransform } from '@angular/core';
import {Score} from "../models/Score";

@Pipe({
  name: 'averange'
})
export class AverangePipe implements PipeTransform {

  transform(value: Score[]): number {
    // calculer la moyenne des scores
    let sum = 0
    value.forEach(score => { sum += score.value })
    return sum / value.length
  }

}
