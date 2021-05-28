import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service'

@Component({
    selector: 'app-add-task-modal',
    templateUrl: './add-task-modal.component.html',
    styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {

    @Input() modalAddVisible: boolean = true;
    @Output() changeModalVisible = new EventEmitter<boolean>();
    @Output() public addTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(
        private tasksService: TasksService
    ) {  }

    changeVisible() {
        this.changeModalVisible.emit()
    }

    public onSubmit(nameTask: string , aboutTask: string, emergencyTask: boolean, statusTask: string): void {
        const task = new Task(nameTask, aboutTask, emergencyTask, statusTask);
        this.tasksService.addTask(task);
        this.changeVisible();
    }

    nameTask: string = '';
    aboutTask: string = '';
    emergencyTask: boolean = false;
    statusTask: string = 'planned';
}
