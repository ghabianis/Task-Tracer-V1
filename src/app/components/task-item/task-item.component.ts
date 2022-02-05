import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskServiceService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() Task? : Task;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
  }
  onDelete(id:any){
    this.taskService.DeleteTasks(this.Task?.id).subscribe(()=>{
      window.location.reload();
    });
  }

  onToggle(task:any){
    this.onToggleReminder.emit(task);
  }
}
