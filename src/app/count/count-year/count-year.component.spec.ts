import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountYearComponent } from './count-year.component';

describe('CountYearComponent', () => {
  let component: CountYearComponent;
  let fixture: ComponentFixture<CountYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
