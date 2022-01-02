import { Component, OnInit } from '@angular/core';
import { CustomapiclientService } from '../customapiclient.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  departments = null;

  constructor(private empService : CustomapiclientService) { }

  ngOnInit(): void {
    this.empService.getDept().subscribe((data) =>
    {
      console.log(data);
      this.departments = data;
    });
  }

}
