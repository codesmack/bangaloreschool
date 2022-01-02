export class Users{
    fname : string = '';
    lname : string = '';
    commision = 100.29;
    price = 120.87;
    createdOn : Date = new Date();

    constructor(firstname : string , lastname : string){
        this.fname = firstname;
        this.lname = lastname;
    }
}
