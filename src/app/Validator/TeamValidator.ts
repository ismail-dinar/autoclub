import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';

export class TeamValidator {
  static teamname(teamRef: string, afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const name = control.value.toLowerCase();
      return afs.collection(teamRef, ref => ref.where('teamNameCheck', '==', name))
        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ?  { nameAvailable: false } : null),
        );
    };
  }
}
