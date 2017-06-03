import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FirebaseServiceService } from '../firebase-service.service';
import {MdDialog, MdDialogRef } from '@angular/material';
import { ProgrammeDataDialogComponent } from '../programme-data-dialog/programme-data-dialog.component'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[FirebaseServiceService]
})
export class CoursesComponent implements OnInit {

  cxcSubjects = [];
  capeSubjects = [];
  userCxcSubjects = [];
  userCapeSubjects = [];
  allProgrammes = [];
  imageList = [];
  edit = false;
  group = 'cxc';
  color = 'primary';

  constructor(public af: AngularFire, private data: FirebaseServiceService, public dialog: MdDialog) {
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
   //The function below is used to open a dialog when the user selects a programme from the list.
   openDialog(programme){
      let dialogRef = this.dialog.open(ProgrammeDataDialogComponent);
      //We set The current Programme attribute of the programme-data-dialog component the to programme selected by the user so that we can display relevent data.
      dialogRef.componentInstance.currentProgramme = programme;

   }

  ngOnInit() {
    this.data.retrieveProgrammes().subscribe(snapshots =>{
      snapshots.forEach(programme =>{
        this.allProgrammes.push(programme.val());
        //In the faculty name, we replace all the spaces with underscores '_' to get the name of the images. 
        this.imageList.push(programme.val().Faculty.replace(/\ /g, '_'));
      })
    })
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
  deleteCXCSubject(index){
    console.log("Deleted");
  }

}