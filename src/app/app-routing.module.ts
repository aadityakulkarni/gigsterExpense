import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {ExpenseComponent} from './expense/expense.component';
import {AddExpenseComponent} from './expense/add/add.component';
import {UpdateExpenseComponent} from './expense/update/update.component';
import {ErrorsComponent} from './errors/errors.component';
import {AuthGuard} from "./auth-guard.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'expense', component: ExpenseComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddExpenseComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateExpenseComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorsComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
