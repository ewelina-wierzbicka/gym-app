import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { TableComponent } from './table/table.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { RangeInputComponent } from './range-input/range-input.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StartButtonComponent,
    ExerciseManagerComponent,
    TableComponent,
    WorkoutManagerComponent,
    RangeInputComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
