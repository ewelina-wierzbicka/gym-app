import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from '../workout-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-manager',
  templateUrl: './exercise-manager.component.html',
  styleUrls: ['./exercise-manager.component.css']
})

export class ExerciseManagerComponent implements OnInit {
  exerciseList = this.workoutService.exerciseList;
  id: string;

  constructor(
    private workoutService: WorkoutServiceService,
    private route: ActivatedRoute) { }

  startExercise(exerciseId: string, exercise: string) {
    this.workoutService.startExercise(this.id, exerciseId, exercise);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
