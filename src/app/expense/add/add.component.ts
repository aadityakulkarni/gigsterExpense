import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseService} from '../expense.service';
import {Expense} from '../expense.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-expense',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddExpenseComponent implements OnInit {

  constructor(private expenseServ: ExpenseService,
  private router: Router) { }

  ngOnInit() {
    this.expenseServ.get().subscribe();
  }

  saveExpense(form: NgForm) {

    const date = new Date();
    const currDate = date.toLocaleDateString();
    const currTime = date.toLocaleTimeString();
    const expense = form.value.expense;
    const cost = form.value.cost;
    const description = form.value.description;
    if (typeof cost === 'number') {
      this.expenseServ.save(
        new Expense(expense, description, currDate, currTime, cost)
      ).subscribe(
        (response) => {
          this.router.navigate(['/expense']);
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/error']);
        }
      );
    } else {
      this.router.navigate(['/error']);
    }
  }
}
