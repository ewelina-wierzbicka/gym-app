import { Injectable } from '@angular/core';
import { Set } from './set';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
API_HOST: string;
}
  }
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  exerciseList = [
    {
      title: 'Przysiady ze sztangą',
      max: '70'
    },
    {
      title: 'Wyciskanie sztangi stojąc',
      max: '20'
    },
    {
      title: 'Unoszenie hantli bokiem',
      max: '20'
    },
    {
      title: 'Wyciskanie hantli siedząc',
      max: '50'
    }
  ];

  private setListSubject: Subject<any> = new Subject<any>();
  private currentResultsSubject: Subject<any> = new Subject<any>();
  private allResultsSubject: Subject<any> = new Subject<any>();
  private prevSetListSubject: Subject<any> = new Subject<any>();

  prevId: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

    startWorkout(id) {
      this.http.post(`${process.env.API_HOST}/workout`, id)
      .subscribe();
    }

    startExercise(id: string, prevId: string, exerciseId: string, exercise: string) {
      this.http.put(`${process.env.API_HOST}/workout/${id}`, {exerciseId, exercise})
      .subscribe(() => {
        this.retrievePreviousSets(prevId, exerciseId);
        this.retrieveSets(id, exerciseId);
      });
    }

    addSet(id: string, exerciseId: string, set: Set) {
      this.http.put(`${process.env.API_HOST}/workout/${id}/exercises/${exerciseId}`, set)
      .subscribe(() => this.retrieveSets(id, exerciseId));
    }

    retrieveSets(id: string, exerciseId: string) {
      this.http.get(`${process.env.API_HOST}/workout/${id}/exercises/${exerciseId}`)
      .subscribe(response => this.setListSubject.next(response));
    }

    retrievePreviousSets(id: string, exerciseId: string) {
      this.http.get(`${process.env.API_HOST}/workout/${id}/exercises/${exerciseId}`)
      .subscribe(response => this.prevSetListSubject.next(response));
    }

    retrieveCurrentResults(id: string) {
      this.http.get(`${process.env.API_HOST}/workout/${id}`)
      .subscribe(response => this.currentResultsSubject.next(response));
    }

    retrieveAllResults() {
      this.http.get(`${process.env.API_HOST}/workout`)
      .subscribe(response => this.allResultsSubject.next(response));
    }

    getPreviousId() {
      this.http.get<any[]>(`${process.env.API_HOST}/workout`)
      .subscribe(response => {
        this.prevId.next(response[response.length - 1]._id);
        console.log(this.prevId.value);
      });
    }

    getSets() {
      return this.setListSubject.asObservable();
    }

    getPreviousSets() {
      return this.prevSetListSubject.asObservable();
    }

    getCurrentResults() {
      return this.currentResultsSubject.asObservable();
    }

    getAllResults() {
      return this.allResultsSubject.asObservable();
    }

    }
