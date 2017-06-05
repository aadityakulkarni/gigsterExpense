import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';

describe('RegisterComponent', () => {
  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [AuthService],
      declarations: [ RegisterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // loading header component and the required AuthService
    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.debugElement.componentInstance;
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {

    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
