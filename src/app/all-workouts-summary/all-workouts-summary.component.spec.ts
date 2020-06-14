import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkoutsSummaryComponent } from './all-workouts-summary.component';

describe('AllWorkoutsSummaryComponent', () => {
  let component: AllWorkoutsSummaryComponent;
  let fixture: ComponentFixture<AllWorkoutsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorkoutsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkoutsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
