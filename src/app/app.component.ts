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
      apiKey: 'AIzaSyAxHfjvFvmc4QzPnbmqRmwe56XHb2jg264',
      authDomain: 'expense-manager-96ae1.firebaseapp.com',
      databaseURL: 'https://expense-manager-96ae1.firebaseio.com',
      projectId: 'expense-manager-96ae1',
      storageBucket: 'expense-manager-96ae1.appspot.com'
    });
  }
}
