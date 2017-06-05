import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from './auth/auth.service';

describe('AppComponent', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, HeaderComponent],
      imports: [RouterTestingModule],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // loading header component and the required AuthService
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.debugElement.componentInstance;
    fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

});
