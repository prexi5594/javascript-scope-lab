// Write your solution in this file!


// Global scope
let burgers = ["Hamburger", "Cheeseburger"];
let milkshakes = ["Vanilla Shake", "Chocolate Shake"];
let drink = "Cola";

// Function to add a featured item
function addFeaturedItem(item) {
  // Function-scoped variable
  let featured = `Featured today: ${item}`;
  console.log(featured);
}

// Block scope example
if (true) {
  let newBurger = "Bacon Burger"; // block-scoped
  burgers.push(newBurger);
}
