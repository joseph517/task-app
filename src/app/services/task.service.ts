import { Injectable } from '@angular/core';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks!: Task[];

  constructor() {
     this.tasks = [
      // {title: 'write', description: ' i love to write', hide: true}
    ]
  }

  addTask(task: Task) {
    this.tasks.push(task)
    let tasks: Task[] = [];
    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      let taskData = localStorage.getItem('tasks');
      if (taskData !== null) {
        tasks = JSON.parse(taskData)
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }
  
  getTask() {
    if (localStorage.getItem('tasks') === null) {
      return this.tasks            
    } else {
      let taskData = localStorage.getItem('tasks');
      if (taskData !== null) {
        this.tasks = JSON.parse(taskData)
        return this.tasks
      }
            
      return this.tasks
    }    
  }
  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++){
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
        
      
      
    }
  }

}
