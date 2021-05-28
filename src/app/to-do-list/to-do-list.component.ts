import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service'

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

    public tasks: Task[] = [];

    constructor (
        private tasksService: TasksService
    ) {  }

    ngOnInit(): void {
        this.updateTasks();
    }
    public updateTasks(): void {
        this.tasks = this.tasksService.updateTasks();
    }


    modalAddIsVisible: boolean = false;

    public showModal(): void {
        this.modalAddIsVisible = true;
    }
    public changeVisible(): void {
        this.modalAddIsVisible = false;
    }


    modalTaskIsVisible: boolean = false;
    selectedTask?: Task;

    public showTaskModal(task: Task): void {
        this.modalTaskIsVisible = true;
        this.selectedTask = task;
    }

    public changeTaskVisible(): void {
        this.modalTaskIsVisible = false;
    }

    public editing(editTask: Task): void {
        for (var i = 0 ; i < this.tasks.length ; i++) {
            if (this.tasks[i]['id'] == editTask.id) {
                this.tasks[i] = editTask;
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    }
}
