import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsComponent } from './errors.component';
import {AuthService} from "../auth/auth.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('ErrorsComponent', () => {
  let comp: ErrorsComponent;
  let fixture: ComponentFixture<ErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsComponent ],
      providers: [AuthService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsComponent);
    comp = fixture.componentInstance;
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {

    fixture = TestBed.createComponent(ErrorsComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
