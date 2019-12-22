import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {

  exerciseList = [
    {
      title: 'aaa'
    },
    {
      title: 'bbb'
    },
    {
      title: 'ccc'
    }
  ];

  constructor() { }
}
