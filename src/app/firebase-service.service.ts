import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class FirebaseServiceService {

  allProgrammes = [];

  constructor(public af: AngularFire) { }

  retrieveProgrammes(){
    return this.af.database.list('/Programmes', {preserveSnapshot: true});
  }

}
