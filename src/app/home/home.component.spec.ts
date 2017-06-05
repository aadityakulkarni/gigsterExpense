import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should show `Welcome to Expense Manager...!!!`', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.debugElement.componentInstance;
    expect(el.innerText).toBe('Welcome to Expense Manager...!!!');
  });
});
