import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../UserInfo';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  searchClicked  = false;
  userInfos : UserInfo[] = [];

  //DI - dependency injection is happening here
  constructor(private userSrv : UsersService) { 

  }

  ngOnInit(): void {
    this.userInfos = this.userSrv.getUserInfo();
  }

  onSearchClicked(){
    this.searchClicked = true;
    console.log('onSearchClicked');
  }

  onClearFired(name){
    console.log('onClearFired');
    console.log(name);
    this.userInfos = this.userInfos.filter((element) =>{
      return element.firstname != name;
    })
    //this.searchClicked = false;
  }
}

