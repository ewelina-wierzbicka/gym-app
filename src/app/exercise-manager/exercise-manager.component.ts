import { Component, OnInit } from '@angular/core';
import { ExerciseServiceService } from '../exercise-service.service';

@Component({
  selector: 'app-exercise-manager',
  templateUrl: './exercise-manager.component.html',
  styleUrls: ['./exercise-manager.component.css']
})
export class ExerciseManagerComponent implements OnInit {
  exerciseList = this.exerciseService.exerciseList;

  constructor(private exerciseService: ExerciseServiceService) { }

  ngOnInit() {
  }

}
