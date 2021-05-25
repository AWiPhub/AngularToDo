import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';

@NgModule({
    declarations:   [AppComponent, ToDoListComponent, AddTaskModalComponent],
    imports:        [BrowserModule, FormsModule],
    bootstrap:      [AppComponent]
})
export class AppModule { }