import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyAAd2kJi7oGmicOC_-loqHvq1bomaIbs50",
        authDomain: "vitaliyproject-41bb7.firebaseapp.com",
        databaseURL: "https://vitaliyproject-41bb7.firebaseio.com",
        projectId: "vitaliyproject-41bb7",
        storageBucket: "vitaliyproject-41bb7.appspot.com",
        messagingSenderId: "147701162984"
    });
  }
}
