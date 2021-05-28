import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() public task!: Task;
    @Output() changeTaskModalVisible = new EventEmitter<boolean>();

    constructor(
    ) {
    }

    ngOnInit() {
    }

    modalTaskIsVisible: boolean = false;

    public showTaskModal(): void {
        this.modalTaskIsVisible = true;
    }

    changeTaskVisible() {
        this.changeTaskModalVisible.emit()
    }

}
