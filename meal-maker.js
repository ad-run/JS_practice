/*
Meal Maker
A restaurant has hired you to create a function for their website that allows 
them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses the new function 
can generate a meal and a price for Today’s Special without any embarrassing errors!
1.We’ll hold the meal, price, and their respective getters and setters in an object named menu.
2. We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!
Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.
3.Add Setter Methods. To safely reassign the two menu properties, we can add setters that type check the values being assigned.
Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. Leave the function body empty for now.
4.In the body of the setter method, create an if statement that checks if mealToCheck is a string. If it is, return the object’s _meal property with mealToCheck assigned as the value.
5. Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. This method should make sure the value associated with _price is always a number.
6.Below the menu object, set the values of _meal and _price using the newly created setter methods. Then, console.log() the menu object to check their functionality.
Add a Getter Method
7.Now it’s time to safely return the values of the _meal and _price properties in a readable form. Instead of directly accessing the properties, we can use a getter method that proactively checks if a meal and price have been properly set, before returning the values.
Below the setters, use the get keyword to create a todaysSpecial method. Leave the function body empty for now.
8.In the body of the getter, create an if…else statement to check if _meal and _price values exist (or are truthy values). If so, return a string telling potential website visitors what Today’s Special is. For example: “Today’s Special is Spaghetti for $5!”
If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'.
8.Finally, use the getter method to console.log() Today’s Special.
Assuming you used the meal setter to assign a string, and the price setter to assign a number, you should see Today’s Special logged to the console.
*/
const menu = {
    _meal: (''),
    _price: 0,
    set meal (mealToCheck) {
        if (typeof mealToCheck === "string") {
            return this._meal = mealToCheck;
        }
    },
    set price (priceToCheck) {
        if (typeof priceToCheck === "number") {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
}
/*
If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!
*/
meals = ['pizza', 'kebab', 'taco', 'biff', 'soup'];

randomMeal = meals[Math.floor(Math.random() * 5)];

const getPrice = () => {
    switch (randomMeal) {
      case 'pizza':
      return 10;
      break;
      case 'kebab':
      return 14;
      break;
      case 'taco':
      return 8;
      break;
      case 'biff':
      return 18;
      break;
      case 'soup':
      return 6;
      break;
    }
  }
  
  menu.meal = randomMeal;
  menu.price = getPrice();
  console.log(menu.todaysSpecial);