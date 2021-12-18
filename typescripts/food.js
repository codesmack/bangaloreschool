var Chinese = /** @class */ (function () {
    function Chinese() {
    }
    Chinese.prototype.getMenu = function (id) {
        console.log(id);
    };
    return Chinese;
}());
var South = /** @class */ (function () {
    function South() {
    }
    South.prototype.getMenu = function (id) {
        console.log(id);
    };
    return South;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(food) {
        this.food = food;
        this.food.getMenu(1);
    }
    return Restaurant;
}());
var foodType = new Chinese();
var restOne = new Restaurant(foodType);
var foodTypeOther = new South();
var restTwo = new Restaurant(foodTypeOther);
