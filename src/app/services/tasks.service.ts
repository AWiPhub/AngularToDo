import { Injectable } from '@angular/core';
import { Task } from '../models/task.model'

@Injectable({
    providedIn: 'root'
})

export class TasksService {

    constructor() {
    }
  
    private tasks: Task[] = [];
  
    public updateTasks(): Task[] {
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      return this.tasks;
    }

    public changeStatusTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    public addTask(task: Task) {
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    public removeTask(id: string) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
  }