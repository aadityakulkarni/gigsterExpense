
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  uuid: string;
  constructor(private router: Router) {}
  signupUser(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      }
    )
      .catch(
        (error) => {
          console.log(error);
          this.router.navigate(['/error']);
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.uuid = firebase.auth().currentUser.uid;
        }
      )
      .catch(
        (error) => {
          console.log(error);
          this.router.navigate(['/error']);
        }
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      )
      .catch(
      (error) => {
        console.log(error);
        this.router.navigate(['/error']);
      }
    );

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }
}
