// Write your solution in this file!


// Step 1: Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];

let featuredDrink = 'Strawberry Milkshake';

// Step 2 & 3: Function and block scope
function addBurger() {
  // Function-scoped variable
  const newBurger = 'Flatburger';
  burgers.push(newBurger);

  // Block scope
  if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
  }
}

// Step 4: Change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}
