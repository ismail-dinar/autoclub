import { Subscription } from 'rxjs';
import { TeamValidator } from './../../Validator/TeamValidator';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit, OnDestroy {
  inscriptionForm: FormGroup;
  success = false;
  allowed = [ 'teamsDrift',  'teamsCao'];
  disable = false;
  clicked = false;
  private teamRef: string;
  private subscription = new Subscription();
  constructor(private afs: AngularFirestore, private fb: FormBuilder, private dialog: MatDialog,
    private activatedRoute: ActivatedRoute, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe(param => {
      this.teamRef = param['challenge'];
      if ( !this.allowed.includes(this.teamRef) ) {
        this.router.navigateByUrl('/fast&furious');
      }
      this.router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          window.location.reload();
        }
      });
  }));
      this.inscriptionForm = this.fb.group({
        teamName : ['', [Validators.required, Validators.pattern(/^[a-zA-Z].*[a-zA-Z0-9]$/),
        Validators.maxLength(50), Validators.minLength(5)],
        TeamValidator.teamname(this.teamRef, this.afs)
      ],
        establishment : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.maxLength(50), Validators.minLength(2)]],
        leader : this.initMember(),
        secondMember : this.initMember(),
        thirdMember : this.initMember(),
        fourthMember : this.initMember(),
        teamNameCheck : '',
        dateAdded: ''
      });
    }
    async submitHandler() {
      if (!['', null].includes(this.teamName.value) && !['', null].includes(this.establishment.value)
      && !this.checkFormGroup('leader')) {
      try {
        this.inscriptionForm.get('teamNameCheck').setValue(this.teamName.value.toLowerCase());
        this.inscriptionForm.get('dateAdded').setValue(new Date());
        this.getRidOfNullValues();
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
    initMember() {
      return  this.fb.group({
        name : ['', [Validators.required, Validators.pattern('^[a-zA-Z].*')]],
        email : ['', [Validators.required, Validators.email]],
        phone : [null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(20000000), Validators.max(99999999)]]
      });
    }
   get teamName() {
     return this.inscriptionForm.get('teamName');
   }
   get establishment() {
    return this.inscriptionForm.get('establishment');
   }
   member(member: string) {
    return this.inscriptionForm.get(member);
   }
   memberName(member: string) {
     return this.inscriptionForm.get(member).get('name');
   }
   memberEmail(member: string) {
     return this.inscriptionForm.get(member).get('email');
   }
   memberPhone(member: string) {
     return this.inscriptionForm.get(member).get('phone');
   }
   checkFormGroup(member: string) {
      if ( (this.inscriptionForm.get(member).get('name').value === '' || this.inscriptionForm.get(member).get('name').value === null) &&
      (this.inscriptionForm.get(member).get('email').value === '' || this.inscriptionForm.get(member).get('email').value === null) &&
      this.inscriptionForm.get(member).get('phone').value === null
      ) {
        return true;
      } else {
        return false;
      }
   }
  //  export() {
  //    for (const i of this.allowed) {
  //     this.afs.collection(i, ref => ref.where('teamName', '>=', ' ')).valueChanges().subscribe(
  //         data => {  this.db.list(i).push(data);
  //             console.log(data);
  //         }
  //     );
  //    }
  //  }
   resetFormGroup(member: string) {
    this.member(member).reset();
    this.member(member).markAsPristine();
    this.member(member).markAsUntouched();
   }
   getRidOfNullValues() {
     if (this.checkFormGroup('secondMember')) {
        delete this.inscriptionForm.value['secondMember'];
     }
     if (this.checkFormGroup('thirdMember')) {
        delete this.inscriptionForm.value['thirdMember'];
     }
     if (this.checkFormGroup('fourthMember')) {
        delete this.inscriptionForm.value['fourthMember'];
     }
   }
   validate() {
      if (this.inscriptionForm.valid) {
        return true;
      } else if ( this.member('leader').valid && this.member('secondMember').valid
      && this.member('thirdMember').valid && this.checkFormGroup('fourthMember') ) {
         this.resetFormGroup('fourthMember');
         if (this.teamName.valid && this.establishment.valid) {
          return  true;
         }
      } else if (this.member('leader').valid && this.member('secondMember').valid
       && this.checkFormGroup('thirdMember') && this.checkFormGroup('fourthMember')) {
        this.resetFormGroup('fourthMember');
        this.resetFormGroup('thirdMember');
        if (this.teamName.valid && this.establishment.valid) {
          return  true;
         }
      } else if (this.member('leader').valid && this.checkFormGroup('secondMember')
       && this.checkFormGroup('thirdMember') && this.checkFormGroup('fourthMember')) {
        this.resetFormGroup('fourthMember');
        this.resetFormGroup('thirdMember');
        this.resetFormGroup('secondMember');
        if (this.teamName.valid && this.establishment.valid) {
          return  true;
         }
      } else {
        return false;
      }
   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
