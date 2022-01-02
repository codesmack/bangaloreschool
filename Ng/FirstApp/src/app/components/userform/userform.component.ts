import { Component, OnInit } from "@angular/core";
import { CountryList } from "src/app/Models/CountryList";
import { Users } from "src/app/Models/Users";

@Component({
    selector : 'userform',
    templateUrl: './userform.component.html',
    styles: ['.required-border { border-left: 5px solid var(--bs-danger)}']
})

export class UserFormComponent implements OnInit {
    countryList : CountryList[] = [];
    users : Users[] = [];
  
    constructor(){
        let cl = new CountryList(1, "India");
        this.countryList.push(cl);
        cl = new CountryList(2, "SL");
        this.countryList.push(cl);
        cl = new CountryList(3, "Nepal");
        this.countryList.push(cl);
        cl = new CountryList(4, "UAE");
        this.countryList.push(cl);

        
    }
    ngOnInit(): void {
        
    }

    SubmitForm(userForm){

        let user = new Users(userForm.value.firstname, userForm.value.lastname);
        this.users.push(user);
        console.log(JSON.stringify(this.users));

        
        document.querySelectorAll("input.ng-invalid").forEach((badControl) => {
            console.log('in ng-invalid')
            badControl.classList.add("border-danger");
        });

        document.querySelectorAll("input.ng-valid").forEach((badControl) => {
            console.log('in ng-valid')
            badControl.classList.remove("border-danger");
        })
        
        console.log(userForm.valid)
        console.log(JSON.stringify(userForm.value));
    }
}