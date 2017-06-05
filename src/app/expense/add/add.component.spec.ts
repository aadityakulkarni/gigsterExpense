import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseComponent } from './add.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ExpenseService} from "../expense.service";
import {AuthService} from "../../auth/auth.service";
import {FormsModule} from "@angular/forms";

describe('AddExpenseComponent', () => {
  let comp: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [ExpenseService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseComponent);
    comp = fixture.componentInstance;
    fixture.debugElement.injector.get(ExpenseService);
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

 /* it('should be created', () => {

    fixture = TestBed.createComponent(AddExpenseComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });*/
});
