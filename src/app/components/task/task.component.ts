import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task!: Task; 

  constructor(public taskSevice : TaskService){}

  deleteTask(task: Task) {
    if (confirm('are you sure want to delete it')) {
      this.taskSevice.deleteTask(task)
    }
    
  }
}
