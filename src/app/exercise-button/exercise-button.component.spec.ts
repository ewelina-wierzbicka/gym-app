import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseButtonComponent } from './exercise-button.component';

describe('ExerciseButtonComponent', () => {
  let component: ExerciseButtonComponent;
  let fixture: ComponentFixture<ExerciseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
