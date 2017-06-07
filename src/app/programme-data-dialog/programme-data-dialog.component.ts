import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-programme-data-dialog',
  templateUrl: './programme-data-dialog.component.html',
  styleUrls: ['./programme-data-dialog.component.css']
})
export class ProgrammeDataDialogComponent implements OnInit {
  //currentProgramme: Object; 
  currentProgramme = {
    'Programme': '',
    'Faculty': '',
    'Description': ''
  };
  constructor(public dialogRef: MdDialogRef<ProgrammeDataDialogComponent>) { }

  ngOnInit() {
  }

}
