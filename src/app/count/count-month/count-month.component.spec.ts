import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountMonthComponent } from './count-month.component';

describe('CountMonthComponent', () => {
  let component: CountMonthComponent;
  let fixture: ComponentFixture<CountMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
