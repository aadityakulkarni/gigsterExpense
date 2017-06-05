import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseComponent } from './expense.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ExpenseService} from './expense.service';
import {AuthService} from '../auth/auth.service';

describe('ExpenseComponent', () => {
  let comp: ExpenseComponent;
  let fixture: ComponentFixture<ExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseComponent ],
      imports: [RouterTestingModule],
      providers: [ExpenseService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseComponent);
    comp = fixture.componentInstance;
    fixture.debugElement.injector.get(ExpenseService);
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  /*it('should be created', () => {

    fixture = TestBed.createComponent(ExpenseComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });*/
});
