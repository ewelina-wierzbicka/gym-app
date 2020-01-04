import { TestBed } from '@angular/core/testing';

import { WorkoutServiceService } from './workout-service.service';

describe('ExerciseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutServiceService = TestBed.get(WorkoutServiceService);
    expect(service).toBeTruthy();
  });
});
