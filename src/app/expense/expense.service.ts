import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {Expense} from './expense.model';

@Injectable()
export class ExpenseService {
  public expenseAll: Expense[] = [];

  constructor(private http: Http, private authServ: AuthService) {}

  save(expense: Expense) {

    this.expenseAll.push(expense);
    return this.http.put('https://expense-manager-96ae1.firebaseio.com/data/' +
      this.authServ.uuid + '.json?auth=' + this.authServ.getToken(), this.expenseAll);

  }

  get() {
    return this.http.get('https://expense-manager-96ae1.firebaseio.com/data/' +
      this.authServ.uuid + '.json?auth=' + this.authServ.getToken()).map(
      (response: Response) => {
        if (response.json() !== null) {
          const expense: Expense[] = response.json();
          this.expenseAll = expense;
        }
      }
    );
  }

  updateDb() {
    return this.http.put('https://expense-manager-96ae1.firebaseio.com/data/' +
      this.authServ.uuid + '.json?auth=' + this.authServ.getToken(), this.expenseAll);

  }
}
