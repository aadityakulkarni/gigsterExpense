import {Component, OnInit} from '@angular/core';
import {Expense} from '../expense.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ExpenseService} from '../expense.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  u;
  id: number;
  singleExpense: Expense;
  constructor(private expenseServ: ExpenseService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.singleExpense = this.expenseServ.expenseAll[this.id];
        this.u = new FormGroup({
          expense: new FormControl( this.singleExpense.name ),
          cost: new FormControl( this.singleExpense.cost ),
          description: new FormControl( this.singleExpense.description )
        });
    }
    );
  }

  updateExpense(form) {
    const date = new Date();
    const currDate = date.toLocaleDateString();
    const currTime = date.toLocaleTimeString();
    const expense = form.value.expense;
    const cost = form.value.cost;
    const description = form.value.description;
    const ex = new Expense(expense, description , currDate, currTime, cost);
    this.expenseServ.expenseAll[this.id] = ex;
    this.expenseServ.updateDb().subscribe(
      (response) => {
          this.router.navigate(['/expense']);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/error']);
      }
    );
  }
}
