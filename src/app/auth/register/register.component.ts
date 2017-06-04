import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    const cpass = form.value.cpassword;
    if (pass === cpass) {
      this.authService.signupUser(email, pass);
    } else {
      console.log('Passwords not matching');
    }

  }
}
