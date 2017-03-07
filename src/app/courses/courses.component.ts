import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  cxcSubjects = [];
  capeSubjects = [];
  userCxcSubjects = [];
  userCapeSubjects = [];
  edit = false;
  group = 'cxc';

  constructor(public af: AngularFire) {
    this.af.database.list('/CSECSubjects', {preserveSnapshot: true}).subscribe(snapshots => {
      snapshots.forEach(snapshot =>{
        this.cxcSubjects.push(snapshot.val());
      })
    });
    this.af.database.list('/CAPESubjects', {preserveSnapshot: true}).subscribe(snapshots =>{
      snapshots.forEach(snapshot =>{
        this.capeSubjects.push(snapshot.val());
      })
    })
   }

  ngOnInit() {
  }
  addSubject(formData){
    if(formData.valid){
      if(formData.value.myGroup == 'cape')
        this.userCapeSubjects.push(formData.value.cape_subject);
      else
        this.userCxcSubjects.push(formData.value.cxc_subject);

      console.log(this.userCxcSubjects);
      console.log(this.userCapeSubjects);
    }
  }
  editData(){
    this.edit = !this.edit;
  }

}
