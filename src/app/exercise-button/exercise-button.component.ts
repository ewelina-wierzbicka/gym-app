import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../workout';

@Component({
  selector: 'app-exercise-button',
  templateUrl: './exercise-button.component.html',
  styleUrls: ['./exercise-button.component.css']
})
export class ExerciseButtonComponent implements OnInit {
@Input() exercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

}
