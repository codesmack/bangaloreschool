import { Injectable } from '@angular/core';
import { UserInfo } from './UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userInfos : UserInfo[] = [];
  
  constructor() { }

  getUserInfo() {
    let uInfo = new UserInfo("Mike","Tyson","A", 30);
    this.userInfos.push(uInfo);
    uInfo = new UserInfo("Sam","Perri","B", 20);
    this.userInfos.push(uInfo);
    uInfo = new UserInfo("Ron","Son","A", 54);
    this.userInfos.push(uInfo);
    uInfo = new UserInfo("Mohan","Perri","B", 23);
    this.userInfos.push(uInfo);
    uInfo = new UserInfo("Mini","Son","A", 34);
    this.userInfos.push(uInfo);
    return this.userInfos;
  }

}
