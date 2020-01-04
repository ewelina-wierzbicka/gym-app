import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Set } from '../set';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit {
@Output() submitSet: EventEmitter<Set> = new EventEmitter();

  setForm = this.formBuilder.group({
  weight: '',
  rep: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(data: Set) {
    this.submitSet.emit(data);
  }

  ngOnInit() {
  }

}
