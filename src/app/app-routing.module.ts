import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartButtonComponent } from './start-button/start-button.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {path: '', component: StartButtonComponent},
  {path: 'workout', component: ExerciseManagerComponent},
  {path: 'workout/:exercise_id', component: WorkoutManagerComponent},
  {path: 'workout/results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
