import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Injectable()
export class FirebaseServiceService {

  allProgrammes = [];

  constructor(public af: AngularFireDatabase) { }

  retrieveProgrammes(){
    return this.af.list('/Programmes', {preserveSnapshot: true});
  }

}
