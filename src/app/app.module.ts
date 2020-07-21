import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartManagerComponent } from './start-manager/start-manager.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { TableComponent } from './table/table.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { RangeInputComponent } from './range-input/range-input.component';
import { CurrentWorkoutSummaryComponent } from './current-workout-summary/current-workout-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AllWorkoutsSummaryComponent } from './all-workouts-summary/all-workouts-summary.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    StartManagerComponent,
    ExerciseManagerComponent,
    TableComponent,
    WorkoutManagerComponent,
    RangeInputComponent,
    CurrentWorkoutSummaryComponent,
    AllWorkoutsSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule
  ],
  entryComponents: [
    RangeInputComponent
  ],
  providers: [
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
