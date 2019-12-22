import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseServiceService } from '../exercise-service.service';
import { Exercise } from '../workout';

@Component({
  selector: 'app-workout-manager',
  templateUrl: './workout-manager.component.html',
  styleUrls: ['./workout-manager.component.css']
})
export class WorkoutManagerComponent implements OnInit {
exerciseList = this.exerciseService.exerciseList;
exercise: Exercise;

  constructor(private exerciseService: ExerciseServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.exercise = this.exerciseList[+params.get('id')];
    });
  }
  }
