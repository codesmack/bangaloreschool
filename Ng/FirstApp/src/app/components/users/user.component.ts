import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'users',
    template: '<h1>hello User, {{name}} </h1>',
    styles:['h1{ background-color:red; }']
})

export class UserComponent implements OnInit {
    
    @Input() name = "";

    ngOnInit(): void {
        
    }
  

}