import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartManagerComponent } from './start-manager/start-manager.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { CurrentWorkoutSummaryComponent } from './current-workout-summary/current-workout-summary.component';
import { AllWorkoutsSummaryComponent } from './all-workouts-summary/all-workouts-summary.component';

const routes: Routes = [
  {path: '', component: StartManagerComponent},
  {path: 'workout/:id', component: ExerciseManagerComponent},
  {path: 'workout/:id/:exerciseId', component: WorkoutManagerComponent},
  {path: 'workout/:id/:exerciseId/summary', component: CurrentWorkoutSummaryComponent},
  {path: 'summary', component: AllWorkoutsSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
