import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpenseComponent } from './update.component';

describe('UpdateExpenseComponent', () => {
  let component: UpdateExpenseComponent;
  let fixture: ComponentFixture<UpdateExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
