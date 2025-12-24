// Write your solution in this file!


// Global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function to add burgers
function addBurger() {
  // Function-scoped variable
  const newBurger = "Flatburger";
  burgers.push(newBurger);

  // Block-scoped variable inside if
  if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
  }
}

// Function to change featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}
