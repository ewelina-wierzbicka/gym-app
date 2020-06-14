import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutServiceService } from '../workout-service.service';
import { Set } from '../set';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RangeInputComponent } from '../range-input/range-input.component';
import { first } from 'rxjs/operators';


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
  setSubscription: Subscription = new Subscription;
  numberOfSets = 0;

  // setListSubscription: Subscription; //?
  // setList: Array<any>; //?

  constructor(
    private workoutService: WorkoutServiceService,
    private route: ActivatedRoute,
    private dialog: MatDialog) {}


    openDialog() {
      const dialogRef = this.dialog.open(RangeInputComponent, {
        height: '70vh',
        width: 'calc(215px + 20vw)'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.addSet(result);
      });
  }

  addSet(set: Set) {
    this.workoutService.addSet(this.id, this.exerciseId, set);
  }

  getCurrentResults() {
    this.workoutService.retrieveCurrentResults(this.id);
  }

  checkSets() {
    this.setList$.pipe(first()).subscribe(el => this.numberOfSets = el[0].sets.length);
    if (this.numberOfSets >= 5) {
      return true;
    } else {
      return false;
    }
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
