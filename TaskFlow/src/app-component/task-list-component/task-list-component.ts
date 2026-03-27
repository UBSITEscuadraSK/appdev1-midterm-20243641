import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/Task.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css'
})
export class TaskListComponent { 
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
 
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
 
  deleteTask(id: number) {
    const confirmDelete = confirm('Are you sure you want to dleete this task?');
    if (confirmDelete){
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
 }}
