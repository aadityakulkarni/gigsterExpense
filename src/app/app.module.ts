import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {ExpenseService} from './expense/expense.service';
import { AddExpenseComponent } from './expense/add/add.component';
import { UpdateExpenseComponent } from './expense/update/update.component';
import {ExpenseComponent} from './expense/expense.component';
import { ErrorsComponent } from './errors/errors.component';
import {AuthGuard} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ExpenseComponent,
    AddExpenseComponent,
    UpdateExpenseComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, ExpenseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
