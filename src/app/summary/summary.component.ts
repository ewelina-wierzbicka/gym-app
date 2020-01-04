import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from '../workout-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {
  results$: Observable<any>;

  constructor(private workoutService: WorkoutServiceService) { }

  ngOnInit() {
    this.results$ = this.workoutService.getResults();
  }

}
