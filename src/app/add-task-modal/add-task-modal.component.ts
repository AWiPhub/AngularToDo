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
        if (nameTask == '' && aboutTask == '') {
            this.errorName = true;
            this.errorAbout = true;
        } else if (nameTask == '') {
            this.errorName = true;
            this.errorAbout = false;
        } else if (aboutTask == '') {
            this.errorName = false;
            this.errorAbout = true;
        } else {
            const task = new Task(nameTask, aboutTask, emergencyTask, statusTask);
            this.tasksService.addTask(task);
            this.changeVisible();
        }
    }

    nameTask: string = '';
    aboutTask: string = '';
    emergencyTask: boolean = false;
    statusTask: string = 'planned';

    errorName: boolean = false;
    errorAbout: boolean = false;
}
