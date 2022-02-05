import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : String = 'Task Tracer';
  showAddTask? : boolean = false;
  subscription? : Subscription;

  constructor(private ui:UiService , private router:Router) {
    this.subscription = this.ui.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
     this.ui.toggleAddTask();
  }

  hasRouter(route:String){
    return this.router.url === route;
  }
}
