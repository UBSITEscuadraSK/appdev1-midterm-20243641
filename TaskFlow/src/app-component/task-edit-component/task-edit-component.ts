import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/Task.models';

@Component({
  selector: 'app-task-edit-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }

  updateTask() {
    if (this.task) {
      this.taskService.updateTask(this.task);
      alert('Task updated!');
      this.router.navigate(['/tasks', this.task.id, 'info']);
    }
  }
}
