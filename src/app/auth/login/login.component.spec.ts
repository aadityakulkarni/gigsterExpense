import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from "@angular/forms";

describe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [AuthService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // loading header component and the required AuthService
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.debugElement.componentInstance;
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
