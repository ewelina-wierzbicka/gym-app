import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit {

  setForm = this.formBuilder.group({
  weight: ['', Validators.required],
  rep: ['', Validators.required]
  });

  constructor(
   private formBuilder: FormBuilder,
   @Inject(MAT_DIALOG_DATA) public data: {max: string}
  ) { }


  ngOnInit() { }

}
