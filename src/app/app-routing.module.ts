import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartButtonComponent } from './start-button/start-button.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: StartButtonComponent},
  {path: 'workout/:id', component: ExerciseManagerComponent},
  {path: 'workout/:id/:exerciseId', component: WorkoutManagerComponent},
  {path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
