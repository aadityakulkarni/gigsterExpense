import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ExpenseService} from "../../expense/expense.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.signinUser(email, pass);
  }
}
