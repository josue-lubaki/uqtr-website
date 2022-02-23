import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  contacts?: FormArray;
  profileForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.profileForm = this.fb.group({
      fname: [''],
      lname:  [''],
      dob: [''],
      pob:  [''],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street:  [''],
        city:  [''],
        state:  [''],
        zip:  ['']
      }),
      contacts: this.fb.array([]),
      firstChoice : ['', Validators.required],
      secondChoice : ['']
    });

    this.contacts = this.profileForm.get('contacts') as FormArray;
  }

  ngOnInit(): void {
    this.addContact();
  }

  /**
   * Methode qui permet d'ajouter les champs pour le contact
   * */
  addContact(){
    this.contacts?.push(this.fb.group(
      {
        mobile : [''],
        domicile:  [''],
        bureau: [''],
        skype: [''],
        autre: ['']
      }
    ));
  }

}
