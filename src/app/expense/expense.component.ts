import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseService} from './expense.service';
import {Expense} from './expense.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private expenseServ: ExpenseService,
              private router: Router) {

  }

  ngOnInit() {
    this.expenseServ.get().subscribe(
      (response) => {},
      (error) => {
        console.log(error);
        this.router.navigate(['/error']);
      }
    );
  }

  update(index: number) {
    this.router.navigate(['update/' + index]);
  }

  delete(index: number) {
    const expense: Expense = this.expenseServ.expenseAll[index];
    this.expenseServ.expenseAll = this.expenseServ.expenseAll.filter((item) => item !== expense);
    this.expenseServ.updateDb().subscribe(
      (response) => {},
      (error) => {
        console.log(error);
        this.router.navigate(['/error']);
      }
    );
  }
}
