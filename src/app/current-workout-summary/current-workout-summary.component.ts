import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from '../workout-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-workout-summary',
  templateUrl: './current-workout-summary.component.html',
  styleUrls: ['./current-workout-summary.component.css']
})

export class CurrentWorkoutSummaryComponent implements OnInit {
  currentResults$: Observable<any>;

  constructor(private workoutService: WorkoutServiceService) { }

  ngOnInit() {
    this.currentResults$ = this.workoutService.getCurrentResults();
  }

}
