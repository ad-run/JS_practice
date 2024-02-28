/*To group meals according to when they are served, you can categorize them into common mealtime groups. Here are some typical meal categories:

Breakfast: Include items like omelets, pancakes, cereals, and breakfast burritos.
Brunch: A combination of breakfast and lunch dishes, often served later in the morning or early afternoon.
Lunch: Sandwiches, salads, soups, and other light meals.
Dinner: Heavier meals typically served in the evening, including options like grilled meats, pasta, and various side dishes.
Appetizers/Snacks: Finger foods or small bites served before the main meal.
Desserts: Sweets and treats served at the end of a meal.*/

const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);
const context = {
  label: "Meal maker recipes",
  title: "In case you Need to Know How to Make",
  dayDish: [
    {
      group: "Soupe",
      title: "Chili soup",
      image: "../src/images/mealMaker/chili_soupe.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients:
        "600 g ground beef, 1 liter tomato juice, 4 carrots, 2 paprika, 4 chili peppers, 2 onions, 1 celery, 4 garlic, 2 chili beans, chopped tomatoes, salt, pepper, 2 l. vegetable broth",
      instruction: "",
      timing: "1 hour",
      price: "100",
      left: false,
    },
    {
      group: "Soupe",
      title: "Red beet soup",
      image: "../src/images/mealMaker/red_beet_soup.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients:
        "2-3 red beet, 3 potato, 1 carrots, 1 onions, 2 garlic, salt, pepper, 2 l. vegetable broth",
      reciepe: "80",
      price: "",
      left: true,
    },
    {
      group: "Soupe",
      title: "Fermented cabbage soup",
      image: "../src/images/mealMaker/cabbage_soupe.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients:
        "600 g fermented cabbage, 3 potato, 1 onion, 1 carrot, salt, pepper, 2 l. vegetable broth",
      reciepe: "50",
      price: "",
      left: false,
    },
    {
      group: "Main dish",
      title: "Thai-style pork stir-fry",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "Dinner",
      ingredients:
        "600 g pork, 1 carrots, 1 onion, 1 garlic clove (crushed), salt, 1 red chilli (deseeded and finely chopped) 1 red pepper(deseeded and sliced) 1 tbsp fish sauce, 1 tbsp soy sauce, 300 ml rice",
      reciepe: "",
      price: "80",
      left: true,
    },
    {
        group: "Main dish",
        title: "Traditional Lithuanian Stuffed Cabbage Rolls",
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Dinner",
        ingredients:
        "1 medium size cabbage, 600 g ground pork, 140 g half cooked rice, 3 carrots, 1/2 onion, 2 tbsp. ketchup, 1 1/2 tbsp. sour cream,  1 cube chicken or vegetable bouillon, salt, black pepper",
        reciepe: "",
        price: "80",
        left: false,
      },
    {
        group: "Main dish",
        title: "Taco",
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Dinner",
        ingredients:
          "600 g beef, taco spices, tortillas, seasoned vegetables fillings",
        reciepe: "",
        price: "80",
        left: true,
      },
    {
        group: "Soupe",
        title: 'Smoked pork soup with barley',
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Brunch, Lunch, Dinner",
        ingredients:
          "600 g smoked pork, 300 g. barley, 3 potato, 1 onion, 1 carrot, salt, pepper, 2 l. water",
        reciepe: "50",
        price: "",
        left: false,
      },
      {
        group: "Soupe",
        title: "Vegetable soup with meat balls",
        image: "../src/images/mealMaker/soupe_with_meat.jpeg",
        mealTime: "Brunch, Lunch, Dinner",
        ingredients:
          "300 g ground meat, 1 carrots, 1 onion, 1 leak, 1 celery, 1 garlic, cabbage, salt, pepper, 2 l. vegetable broth",
        reciepe: "",
        price: "80",
        left: true,
      },
    {
      group: "Dessert",
      title: "Honney layer cake",
      image: "../src/images/mealMaker/honney_cake.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      price: "500",
      left: false,
    },
    {
      group: "Dessert",
      title: "Brownies with almond and pistachio",
      image: "../src/images/mealMaker/brownies.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      price: "500",
      left: true,
    },
    {
      group: "Dessert",
      title: "Carrot cake",
      image: "../src/images/mealMaker/carrot_cake.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      price: "500",
      left: false,
    },
    {
      group: "Dessert",
      title: "Lemon zucchini cake with poppy seads",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      price: "500",
      left: true,
    },
    {
      group: "Dessert",
      title: "Natural yogurt with fruits and berries",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "Breakfast, bruch, lunch",
      ingredients: "",
      reciepe: "",
      price: "500",
      left: false,
    },
  ],
};

const compiledHtml = template(context);
const mealText = document.getElementById('mealInformation');
mealText.innerHTML = compiledHtml;

const meals = context.dayDish
.filter((meal) => meal.group !== "Dessert")
.map((meal) => meal.title);

console.log(meals);

const desserts = context.dayDish
  .filter((dish) => dish.group === "Dessert")
  .map((dessert) => dessert.title);

console.log(desserts);

/*console.log(mealsArray);*/

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
/*
const menu = {
    _meal: (''),
    _deseert: (''),
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
}*/
/*
If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!
*/

/*
const getPrice = () => {
    switch (randomMeal) {
      case 'Chili soup':
      return 50;
      break;
      case 'Red beet soup':
      return 50;
      break;
      case 'Fermented cabbage soup':
      return 50;
      break;
      case 'Vegetable soup with meat balls':
      return 50;
      break;
      case 'Seefood soup':
      return 50;
      break;
    }
  }
  */
  /*menu.meal = randomMeal;
  menu.dessert = randonDessert;
  menu.price = getPrice();
  console.log(menu.todaysSpecial);*/

  let button = document.getElementById('mealToday-btn');
  let dayMeal = document.getElementById('meal');
  let dayDessert = document.getElementById('dessert');
  let textMeal = document.getElementById('textForTodayMeal');

  function dessertSelector() {
    let randonDessert = Math.floor(Math.random() * desserts.length);
    return desserts[randonDessert];
  };
  function mealSelector() {
    let randonMeal = Math.floor(Math.random() * meals.length);
    return meals[randonMeal];
  };
  function showMeal() {
    dayMeal.innerHTML = mealSelector();
    dayDessert.innerHTML = dessertSelector();
    textMeal.innerHTML = 'Today’s Special meal and dessert: ';
    button.innerHTML = 'Come back tomorrow!';
    button.style.cursor = "default";

    button.removeEventListener('click', showMeal);
  };

  button.addEventListener('click', showMeal);
