import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { WorkoutServiceService } from '../workout-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

  constructor(
    private workoutService: WorkoutServiceService,
    private router: Router) { }

  startWorkout() {
    const id = uuid();
    this.workoutService.startWorkout({id});
    this.router.navigate(['workout', id]);
  }

  ngOnInit() {
  }

}
