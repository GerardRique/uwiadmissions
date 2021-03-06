import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { CoursesComponent } from './courses/courses.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProgrammeDataDialogComponent } from './programme-data-dialog/programme-data-dialog.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCoSa_3upryZCjoQ7DlTLzc9ISMhKzog_8",
    authDomain: "comp3150project.firebaseapp.com",
    databaseURL: "https://comp3150project.firebaseio.com",
    storageBucket: "comp3150project.appspot.com",
    messagingSenderId: "857460931484"
}

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupComponent,
    LoginComponent,
    ProgrammeDataDialogComponent
  ],
  entryComponents: [ProgrammeDataDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
