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

    public showTaskModal(): void {
        this.modalTaskIsVisible = true;
    }

    public changeTaskVisible(): void {
        this.modalTaskIsVisible = false;
    }
}
