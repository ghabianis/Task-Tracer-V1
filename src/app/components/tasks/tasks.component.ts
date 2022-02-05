import { Component, OnInit, Output } from '@angular/core';
import { TASKS } from 'src/app/mock.-tasks';
import { Task } from 'src/app/Task';

import { TaskServiceService } from 'src/app/services/task-service.service';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[]  = [];
  constructor( private taskService: TaskServiceService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks:any)=> {
      (this.tasks = tasks
    )});
  }
  onToggleReminder(task:Task){
     task.reminder = !task.reminder;
     this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) =>(this.tasks.push(task)));
 }


}
