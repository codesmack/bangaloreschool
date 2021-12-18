export class Bike
{
    getInfo()
    {
        console.log('getInfo Called');
    }
}


export class Cars 
{
    carID : number = 1;
    carinfo : string;
    carCreatedOn : Date;

    constructor(carID: number,  
        carinfo : string, 
        carCreatedOn : Date)
    {
        this.carID = carID;
        this.carinfo = carinfo;
        this.carCreatedOn = carCreatedOn;
    }

    getInfo()
    {
        console.log('getInfo Called');
    }
}

