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

    @Output() editedTask = new EventEmitter<Task>();

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

    public changeTaskVisible() {
        this.changeTaskModalVisible.emit();
    }
    
    ngOnInit(): void {
    }

    editing: boolean = false;

    newIdTask: string = '';
    newNameTask: string = '';
    newAboutTask: string = '';
    newStatusTask: string = '';
    newEmergencyTask: boolean = false;

    public changeEditMode(selectedTask: Task, editModeStatus: string): void {
        if (editModeStatus == 'goEdit') {
            this.editing = !this.editing;
            this.newIdTask = selectedTask.id || '';
            this.newNameTask = selectedTask.nameTask || '';
            this.newAboutTask = selectedTask.aboutTask || '';
            this.newStatusTask = selectedTask.statusTask || '';
            this.newEmergencyTask = selectedTask.emergencyTask;
        } else {
            this.editing = !this.editing;
            let editTask = {
                id: this.newIdTask,
                nameTask: this.newNameTask,
                aboutTask: this.newAboutTask,
                statusTask: this.newStatusTask,
                emergencyTask: this.newEmergencyTask
            }
            this.editedTask.emit(editTask);
            this.changeTaskVisible();
        }
    }
}
