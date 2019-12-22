import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseManagerComponent } from './exercise-manager.component';

describe('ExerciseManagerComponent', () => {
  let component: ExerciseManagerComponent;
  let fixture: ComponentFixture<ExerciseManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
