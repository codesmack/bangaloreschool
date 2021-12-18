import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  
  //Inline Data
  title = 'Welcome to my Second App';
  userName = 'Guest';
  showactive = true;
  isRequired = true;
  fullName = 'Sam T';
  txtType = 'time';
  labelId = "label_0";


    constructor(){
      
    }
 

}
