import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  @Input("datasource") userInfos : UserInfo[];
  @Output("clear") info = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfos);
  }
  
  onClearData(name){
      this.info.emit(name);
  }

}