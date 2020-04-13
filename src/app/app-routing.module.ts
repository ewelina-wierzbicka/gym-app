import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartManagerComponent } from './start-manager/start-manager.component';
import { ExerciseManagerComponent } from './exercise-manager/exercise-manager.component';
import { WorkoutManagerComponent } from './workout-manager/workout-manager.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: StartManagerComponent},
  {path: 'workout/:id', component: ExerciseManagerComponent},
  {path: 'workout/:id/:exerciseId', component: WorkoutManagerComponent},
  {path: 'workout/:id/:exerciseId/summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
