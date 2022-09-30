import { TaskFromComponent } from './tasks/task-from/task-from.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "new", component: TaskFromComponent },
  { path: "edit/:id", component: TaskFromComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
