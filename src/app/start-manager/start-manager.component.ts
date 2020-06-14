import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { WorkoutServiceService } from '../workout-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-manager',
  templateUrl: './start-manager.component.html',
  styleUrls: ['./start-manager.component.css']
})
export class StartManagerComponent implements OnInit {

  constructor(
    private workoutService: WorkoutServiceService,
    private router: Router) { }

  startWorkout() {
    const id = uuid();
    this.workoutService.startWorkout({id});
    this.router.navigate(['workout', id]);
  }

  getAllResults() {
    this.workoutService.retrieveAllResults();
    this.router.navigate(['summary']);
  }

  ngOnInit() {
  }

}
