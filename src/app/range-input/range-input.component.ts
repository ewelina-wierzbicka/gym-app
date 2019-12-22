import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit {

  setForm = this.formBuilder.group({
  weight: '',
  rep: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(data) {

  }

  ngOnInit() {
  }

}
