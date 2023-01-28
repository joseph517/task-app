import { Component } from '@angular/core';
import{TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  constructor(public taskservice: TaskService ){}

  addTask(newDescription:HTMLTextAreaElement, newTitle:HTMLInputElement) {
    this.taskservice.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    })
    newTitle.value = ''
    newDescription.value = ''
    newTitle.focus()
    return false
  }

}
