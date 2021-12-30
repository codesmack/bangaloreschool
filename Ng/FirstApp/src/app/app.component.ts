import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
  
})

export class AppComponent {
    showAdmission = false;
    title = "My First App";
    marginLeft = "30px";
    userName = "Mike";

    constructor(){
      this.showAdmission = true;
    }
 
    onNameChange(){
      console.log(this.userName);
    }
}
