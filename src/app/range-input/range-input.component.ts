import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Set } from '../set';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit {
@Output() submitSet: EventEmitter<Set> = new EventEmitter();

  setForm = this.formBuilder.group({
  weight: ['', Validators.required],
  rep: ['', Validators.required]
  });

  constructor(
   private formBuilder: FormBuilder) { }

  onSubmit(data: Set) {
    this.submitSet.emit(data);
  }

  ngOnInit() {
  }

}
