import { Component } from "@angular/core";

@Component({
    selector: 'admission',
    templateUrl: './admission.component.html',
    styleUrls: ['./admission.component.css']
})

export class AdmissionComponent
{
   names = ["seeni", "thiru", "sathya"];
   age = 15;
   paraColor = "red";

   getColor(){
       return this.paraColor;
   }
}