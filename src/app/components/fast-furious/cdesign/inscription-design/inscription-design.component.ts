import { Subscription } from 'rxjs';
import { TeamValidator } from './../../../../Validator/TeamValidator';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './../../../inscription/success-dialog/success-dialog.component';

@Component({
  selector: 'app-inscription-design',
  templateUrl: './inscription-design.component.html',
  styleUrls: ['./inscription-design.component.scss']
})
export class InscriptionDesignComponent implements OnInit {

  inscriptionForm: FormGroup;
  success = false;
  disable = false;
  clicked = false;
  private teamRef = 'teamsDesign';
  constructor(private afs: AngularFirestore, private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
      this.inscriptionForm = this.fb.group({
        establishment : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.maxLength(50), Validators.minLength(2)]],
        name : ['', [Validators.required, Validators.pattern('^[a-zA-Z].*')]],
        email : ['', [Validators.required, Validators.email]],
        phone : [null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(20000000), Validators.max(99999999)]],
        dateAdded: ''
      });
    }
    async submitHandler() {
      if (!['', null].includes(this.inscriptionForm.value) && !['', null].includes(this.establishment.value)) {
      try {
        this.inscriptionForm.get('dateAdded').setValue(new Date());
        await  this.afs.collection(this.teamRef).add(this.inscriptionForm.value);
        this.success = true;
        this.dialog.open(SuccessDialogComponent);
        this.inscriptionForm.reset();
        this.inscriptionForm.markAsPristine();
        this.inscriptionForm.markAsUntouched();
      } catch (err) {
        console.error(err);
      }
    } else {
      window.alert('nice try kiddo');
    }
    }
   get name() {
     return this.inscriptionForm.get('name');
   }
   get establishment() {
    return this.inscriptionForm.get('establishment');
   }
   get email() {
    return this.inscriptionForm.get('email');
   }
   get phone() {
    return this.inscriptionForm.get('phone');
   }
   validate() {
      if (this.inscriptionForm.valid) {
        return true;
      }
   }

}
