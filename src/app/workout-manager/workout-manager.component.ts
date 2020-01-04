import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutServiceService } from '../workout-service.service';
import { Set } from '../set';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-manager',
  templateUrl: './workout-manager.component.html',
  styleUrls: ['./workout-manager.component.css']
})

export class WorkoutManagerComponent implements OnInit {
  exerciseList = this.workoutService.exerciseList;
  exerciseId: string;
  exercise: string;
  id: string;
  setList$: Observable<any>;
  prevSetList$: Observable<any>;

  constructor(
    private workoutService: WorkoutServiceService,
    private route: ActivatedRoute) {}

  addSet(set: Set) {
    this.workoutService.addSet(this.id, this.exerciseId, set);
  }

  getResults() {
    this.workoutService.retrieveResults(this.id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.exerciseId = params.get('exerciseId');
      this.exercise = this.exerciseList[+params.get('exerciseId')];
      this.id = params.get('id');
    });
    this.setList$ = this.workoutService.getSets();
    this.prevSetList$ = this.workoutService.getPreviousSets();
  }

  }
