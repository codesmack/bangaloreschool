interface IFood
{
    foodName : string,
    foodCost : Number,
    foodRating : string,
    getMenu(id : number);
}


class Chinese implements IFood
{
    getMenu(id: number) {
        console.log(id);
    }
    foodRating: string;
    foodName: string;
    foodCost: Number;
}



class South implements IFood
{
    getMenu(id: number) {
        console.log(id);
    }
    foodRating: string;
    foodName: string;
    foodCost: Number;
}
class Restaurant
{
    food: IFood;

    constructor(food : IFood)
    {
        this.food = food;
        this.food.getMenu(1);
    }
}

let foodType = new Chinese();
let restOne = new Restaurant(foodType);

let foodTypeOther = new South();
let restTwo = new Restaurant(foodTypeOther);