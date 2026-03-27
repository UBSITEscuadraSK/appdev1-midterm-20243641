import { Injectable } from '@angular/core';
import { Task } from '../models/Task.models';

@Injectable({
 providedIn: 'root'
})
export class TaskService {

 private tasks: Task[] = [
   {
     id: 1,
     title: 'Study Angular',
     description: 'Learn components and services',
     dueDate: '2026-03-30',
     status: 'Pending',
     priority: 'High'
   }
 ];

 getTasks(): Task[] {
   return this.tasks;
 }

 getTaskById(id: number): Task | undefined {
   return this.tasks.find(task => task.id === id);
 }

 addTask(task: Task) {
   this.tasks.push(task);
 }

 updateTask(updatedTask: Task) {
   const index = this.tasks.findIndex(t => t.id === updatedTask.id);
   if (index !== -1) {
     this.tasks[index] = updatedTask;
   }
 }

 deleteTask(id: number) {
   this.tasks = this.tasks.filter(task => task.id !== id);
 }

 toggleStatus(id: number) {
   const task = this.getTaskById(id);
   if (task) {
     task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
   }
 }
}
