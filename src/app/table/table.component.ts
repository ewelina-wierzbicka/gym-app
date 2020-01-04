import { Component, OnInit, Input } from '@angular/core';
import { WorkoutServiceService } from '../workout-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
@Input() setList$;

  constructor(private workoutService: WorkoutServiceService) {  }

  ngOnInit() {
  }

}
