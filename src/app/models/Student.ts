import { Score } from './Score';

export class Student{
  fname? : string;
  lname? : string;
  cp?: string;
  scores: Score[] = []

  constructor(fname: string, lname: string, scores: Score[]) {
    this.fname = fname;
    this.lname = lname;
    this.cp = this.generateCodePermanent(fname, lname);
    this.scores = scores;
  }

  /**
   * Methode qui permet de générer le code permanent
   * @param fname le first name de l'étudiant
   * @param lname le second name de l'étudiant
   * @return string
   * */
  private generateCodePermanent(fname: string, lname: string): string{
    let code = (lname.substring(0,3)+fname[0]).toUpperCase();
    for(let i = 0; i < 4; i++)
      code+=Math.floor(Math.random() * 100);

    return code;
  }
}
