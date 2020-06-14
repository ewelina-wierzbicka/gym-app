import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { WorkoutServiceService } from '../workout-service.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { filter, map, tap, toArray, distinctUntilChanged } from 'rxjs/operators';
import { DatePipe, formatDate } from '@angular/common';
import { CdkAriaLive } from '@angular/cdk/a11y';


@Component({
  selector: 'app-all-workouts-summary',
  templateUrl: './all-workouts-summary.component.html',
  styleUrls: ['./all-workouts-summary.component.css']
})
export class AllWorkoutsSummaryComponent implements OnInit {
  exerciseList = this.workoutService.exerciseList;
  allResultsSubscription: Subscription;
  allResults: Array<any>;
  myResults: Array<any>;
  formSubscription: Subscription;
  dateForm: FormGroup;
  dateFrom: Date;
  dateTo = new Date();
  exercise: string = this.exerciseList[0];
  minDate: Date;
  maxDate = new Date();
  Today = new Date();
  tenWorkouts: Date;

  scatterChartType: ChartType = 'scatter';
  chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };
  chartData: Array<any>;
  chartLabels: Label[];
  chartColors: Array<any>;
  isDataAvailable: boolean = false;

  constructor(private workoutService: WorkoutServiceService, private formBuilder: FormBuilder, public datepipe: DatePipe) {
    this.allResultsSubscription = this.workoutService.getAllResults()
    .subscribe(results => {
      this.allResults = results;
      this.dateFrom = this.allResults[this.allResults.length - 5].date;
      this.dateForm.controls['dateFrom'].setValue(this.dateFrom);
      this.minDate = this.dateFrom;
      this.isDataAvailable = true;
    });
  };

  getMyResults() {
    this.chartData = [];
    this.chartColors = [];
    this.myResults = this.allResults
    .filter(workout => workout.date >= new Date(this.dateFrom).toISOString() && workout.date <= new Date(this.dateTo).toISOString())
    .map(workout => {
      return {date: workout.date, exercises: workout.exercises.filter(exercise => exercise.title === this.exercise)};
    });
    console.log(this.dateFrom, this.dateTo, this.exercise);
    let r = 40;
    let g = 0;
    let b = 10;
    if (this.myResults.length > 10) {
      // alert(`Wybrałeś ${this.myResults.length} treningów. Na wykresie 10 najnowszych z podanego zakresu.`)
      this.myResults = this.myResults.splice(0, this.myResults.length - 10);
    }
    for (let i=0; i<this.myResults.length; i++) {
      const data = [];
      if (this.myResults[i].exercises.length !== 0 ) {
        for (let j = 0; j<this.myResults[i].exercises[0].sets.length; j++) {
          data.push({x: this.myResults[i].exercises[0].sets[j].weight, y: this.myResults[i].exercises[0].sets[j].rep});
        }
        this.chartData.push({data, label: this.datepipe.transform(this.myResults[i].date, 'd.MM.yyyy, HH:mm'), type: 'line'});
        r > 215 ? r = 120 : r += 40;
        g > 250 ? g = 10 : g += 5;
        b > 235 ? b = 40 : b += 20;
        this.chartColors.push({
          pointBackgroundColor: `rgb(${r}, ${g}, ${b})`,
          borderColor: `rgb(${r}, ${g}, ${b})`,
          borderWidth: 1,
          backgroundColor: 'transparent'
        });
      }
    }
  }

  onChanges() {
    this.formSubscription = this.dateForm.valueChanges.subscribe(val => {
      this.dateFrom = val.dateFrom;
      this.dateTo = val.dateTo.setHours(23, 59, 59, 999);
      this.minDate = this.dateFrom;
      this.maxDate = this.dateTo;
      console.log("z onChanges " + this.maxDate);
      this.exercise = val.exercise;
      this.getMyResults();
    });
  }

  onChartClick(event) {}

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      dateFrom: [this.dateFrom, [ Validators.required ]],
      dateTo: [this.dateTo, [ Validators.required ]],
      exercise: [this.exercise, [ Validators.required ]]
      });

    this.onChanges();
  }

  ngOnDestroy() {
    this.allResultsSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }

}
