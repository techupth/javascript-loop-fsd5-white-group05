// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
let i = 0;
while (i < restaurants.length) {
    let restaurantString = "Restaurant Name: " + restaurants[i];
    newRestaurants.push(restaurantString);
    i++;
}

console.log(newRestaurants);
