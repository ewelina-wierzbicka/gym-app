import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutServiceService } from '../workout-service.service';
import { Set } from '../set';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RangeInputComponent } from '../range-input/range-input.component';


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
