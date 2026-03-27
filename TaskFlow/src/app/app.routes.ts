import { Routes } from '@angular/router';
import { TaskListComponent } from '../app-component/task-list-component/task-list-component';
import { TaskDetailsComponent } from '../app-component/task-details-component/task-details-component';
import { TaskInfoComponent } from '../app-component/task-info-component/task-info-component';
import { TaskEditComponent } from '../app-component/task-edit-component/task-edit-component';
import { TaskAddComponent } from '../app-component/task-add-component/task-add-component';


export const routes: Routes = [ 
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },

{ path: 'tasks', component: TaskListComponent },
{ path: 'tasks/new', component: TaskAddComponent },

{
  path: 'tasks/:id',
  component: TaskDetailsComponent,
  children: [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', component: TaskInfoComponent },
    { path: 'edit', component: TaskEditComponent }
  ]
},

{ path: '**', redirectTo: 'tasks' }
];
