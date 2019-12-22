import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutManagerComponent } from './workout-manager.component';

describe('WorkoutManagerComponent', () => {
  let component: WorkoutManagerComponent;
  let fixture: ComponentFixture<WorkoutManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
