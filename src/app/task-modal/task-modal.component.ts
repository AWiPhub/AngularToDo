import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service'

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

    @Input() selectedTask?: Task;
    @Input() modalTaskVisible: boolean = true;

    @Output() changeTaskModalVisible = new EventEmitter<boolean>();
    @Output() public changeStatusTasks: EventEmitter<Task> = new EventEmitter<Task>();
    
    @Output() remove = new EventEmitter();

    constructor(
        private tasksService: TasksService
    ) { }

    public changeStatus(selectedTask: Task, status: string): void {
        selectedTask.statusTask = status
        this.tasksService.changeStatusTasks();
        this.changeTaskVisible();
    }

    public removeT(selectedTask: Task): void {
        this.tasksService.removeTask(selectedTask.id!);
        this.changeTaskVisible();
        this.remove.emit();
    }

    changeTaskVisible() {
        this.changeTaskModalVisible.emit();
    }
    
    ngOnInit(): void {
    }
}
