import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service'

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
    // @Input() public task!: Task;
    @Input() modalTaskVisible: boolean = true;
    @Output() changeTaskModalVisible = new EventEmitter<boolean>();

    constructor() { }

    changeTaskVisible() {
        this.changeTaskModalVisible.emit()
    }
    
    ngOnInit(): void {
    }

}
