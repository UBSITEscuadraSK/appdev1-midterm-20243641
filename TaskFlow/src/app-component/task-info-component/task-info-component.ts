import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { Task } from '../models/Task.models';

@Component({
  selector: 'app-task-info-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info-component.html',
  styleUrl: './task-info-component.css',
})
export class TaskInfoComponent {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}
