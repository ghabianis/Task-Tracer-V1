import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import * as e from 'cors';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() text?: String;
  @Input() color?: String;
   state : boolean = false;
  @Output() btnClick = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
     this.btnClick.emit();
  }
}
