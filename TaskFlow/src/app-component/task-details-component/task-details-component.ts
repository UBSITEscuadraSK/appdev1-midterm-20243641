import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/Task.models';


@Component({
  selector: 'app-task-details-component',
  imports: [RouterModule],
  templateUrl: './task-details-component.html',
  styleUrl: './task-details-component.css',
})
export class TaskDetailsComponent {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}
