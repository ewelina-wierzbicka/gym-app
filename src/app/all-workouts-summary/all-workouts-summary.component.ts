import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { WorkoutServiceService } from "../workout-service.service";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import {
  FormBuilder,
  Validators,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { DatePipe } from "@angular/common";
import { debounceTime } from "rxjs/operators";

export const datesValidation: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  return new Date(control.get("dateFrom").value) >
    new Date(control.get("dateTo").value)
    ? { datesError: true }
    : null;
};

@Component({
  selector: "app-all-workouts-summary",
  templateUrl: "./all-workouts-summary.component.html",
  styleUrls: ["./all-workouts-summary.component.css"],
})
export class AllWorkoutsSummaryComponent implements OnInit {
  exerciseList = this.workoutService.exerciseList;
  allResultsSubscription: Subscription;
  allResults: Array<any>;
  formSubscription: Subscription;
  dateForm: FormGroup;
  dateFrom: Date;
  dateTo = new Date();
  exercise: string = this.exerciseList[0].title;
  Today = new Date();

  scatterChartType: ChartType = "scatter";
  chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "powtórzenia",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "ciężar",
          },
        },
      ],
    },
  };
  chartData: Array<any>;
  chartLabels: Label[];
  chartColors: Array<any>;
  isDataAvailable: boolean = false;

  constructor(
    private workoutService: WorkoutServiceService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe
  ) {
    this.allResultsSubscription = this.workoutService
      .getAllResults()
      .subscribe((results) => {
        this.allResults = results.filter(
          (workout) => workout.exercises.length !== 0
        );
        this.dateFrom = this.allResults[this.allResults.length - 5].date;
        this.dateForm.controls["dateFrom"].setValue(this.dateFrom);
      });
  }

  getMyResults() {
    this.chartData = [];
    this.chartColors = [];
    let myResults = this.allResults
      .filter(
        (workout) =>
          workout.date >= new Date(this.dateFrom).toISOString() &&
          workout.date <= new Date(this.dateTo).toISOString()
      )
      .map((workout) => {
        let exercises = workout.exercises.filter(
          (exercise) => exercise.title === this.exercise
        );
        return { date: workout.date, exercises: exercises };
      })
      .filter((workout) => workout.exercises.length !== 0);

    let a = 1.1;

    if (myResults.length > 10) {
      alert(
        `Wybrałeś ${myResults.length} treningów. Na wykresie 10 najnowszych z podanego zakresu.`
      );
      myResults = myResults.splice(myResults.length - 10, 10);
    }
    for (let i = 0; i < myResults.length; i++) {
      const data = [];
      if (myResults[i].exercises.length !== 0) {
        for (let j = 0; j < myResults[i].exercises[0].sets.length; j++) {
          data.push({
            x: myResults[i].exercises[0].sets[j].weight,
            y: myResults[i].exercises[0].sets[j].rep,
          });
        }
        this.chartData.push({
          data,
          label: this.datepipe.transform(myResults[i].date, "d.MM.yyyy, HH:mm"),
          type: "line",
        });
        a -= 0.1;
        this.chartColors.push({
          pointBackgroundColor: `rgba(66, 11, 0, ${a}`,
          borderColor: `rgba(66, 11, 0, ${a})`,
          borderWidth: 1,
          backgroundColor: "transparent",
        });
      }
    }
  }

  onChanges() {
    this.formSubscription = this.dateForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((val) => {
        this.dateFrom = val.dateFrom;
        this.dateTo = val.dateTo.setHours(23, 59, 59, 999);
        this.exercise = val.exercise;
        if (this.dateFrom !== null && this.dateTo !== null) {
          this.getMyResults();
        }
        this.isDataAvailable = true;
      });
  }

  onChartClick(event) {}

  ngOnInit() {
    this.dateForm = this.formBuilder.group(
      {
        dateFrom: [this.dateFrom, [Validators.required]],
        dateTo: [this.dateTo, [Validators.required]],
        exercise: [this.exercise, [Validators.required]],
      },
      { validators: datesValidation }
    );

    this.onChanges();
  }

  ngOnDestroy() {
    this.allResultsSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}
