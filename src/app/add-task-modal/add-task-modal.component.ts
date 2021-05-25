import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task'

@Component({
    selector: 'app-add-task-modal',
    templateUrl: './add-task-modal.component.html',
    styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {
    @Input() modalVisible: boolean = false;
    @Output() changeModalVisible = new EventEmitter<boolean>();

    changeVisible() {
        this.changeModalVisible.emit()
    }

    nameTask: string = '';
    aboutTask: string = '';
    emergencyTask: boolean = false;
    task: Task = {
        id: 1,
        nameTask: 'Имя задания',
        aboutTask: 'Название задания',
        emergencyTask: true
    }
}
