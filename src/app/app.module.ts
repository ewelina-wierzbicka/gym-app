import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { ExerciseButtonComponent } from './exercise-button/exercise-button.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { TableComponent } from './table/table.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { RangeInputComponent } from './range-input/range-input.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    StartButtonComponent,
    ExerciseButtonComponent,
    ExerciseManagerComponent,
    TableComponent,
    WorkoutManagerComponent,
    RangeInputComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
