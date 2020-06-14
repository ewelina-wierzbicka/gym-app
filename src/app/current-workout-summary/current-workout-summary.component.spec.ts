import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkoutSummaryComponent } from './current-workout-summary.component';

describe('CurrentWorkoutSummaryComponent', () => {
  let component: CurrentWorkoutSummaryComponent;
  let fixture: ComponentFixture<CurrentWorkoutSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWorkoutSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWorkoutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
