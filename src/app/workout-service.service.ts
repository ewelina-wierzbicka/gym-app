import { Injectable } from '@angular/core';
import { Set } from './set';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  exerciseList: string[] = [
    'Barbell bench press',
    'Standing barbell press',
    'Seated dumbbell press',
    'Rope tricep exstension'
  ];

  private setListSubject: Subject<any> = new Subject<any>();
  private resultsSubject: Subject<any> = new Subject<any>();
  private prevSetListSubject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

    startWorkout(id) {
        this.http.post('http://localhost:3000/workout', id)
        .subscribe();
    }

    startExercise(id: string, exerciseId: string, exercise: string) {
      this.http.put(`http://localhost:3000/workout/${id}`, {exerciseId, exercise})
      .subscribe(() => {
        this.retrievePreviousSets(exerciseId);
        this.retrieveSets(id, exerciseId);
      });
    }

    addSet(id: string, exerciseId: string, set: Set) {
      this.http.put(`http://localhost:3000/workout/${id}/exercises/${exerciseId}`, set)
      .subscribe(() => this.retrieveSets(id, exerciseId));
    }

    retrieveSets(id: string, exerciseId: string) {
      this.http.get(`http://localhost:3000/workout/${id}/exercises/${exerciseId}`)
      .subscribe(response => this.setListSubject.next(response));
    }

    retrievePreviousSets(exerciseId: string) {
      this.http.get(`http://localhost:3000/workout/exercises/${exerciseId}`)
      .subscribe(response => this.prevSetListSubject.next(response));
    }

    retrieveResults(id: string) {
      this.http.get(`http://localhost:3000/workout/${id}`)
      .subscribe(response => this.resultsSubject.next(response));
    }

    getSets() {
      return this.setListSubject.asObservable();
    }

    getPreviousSets() {
      return this.prevSetListSubject.asObservable();
    }

    getResults() {
      return this.resultsSubject.asObservable();
    }

    }
