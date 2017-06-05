import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AuthService} from '../auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

});
