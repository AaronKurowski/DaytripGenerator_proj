"use strict";

/*
function removeArrayElement(array, value){
    let index = array.indexOf(value);
    if(index >= 0){
        array.splice(index, 1);
    }
    return array;
}

arrayEx = ["hi", "bye", "sup"];
console.log(removeArrayElement(arrayEx, "hi"));
*/


// arrays for random selections
let destinations = ["Milwaukee", "Chicago", "Kenosha", "Racine", "Burlington"];
let kenoshaRestaurants = ["La Fogata", "Ian's Pizza", "Brat Stop", "The Coffee Pot", "Tommy's", "Honada", "Luigi's", 
                          "Sazzy B", "House of Gerhard"];
let milwaukeeRestaurants = ["La Merenda", "Odd Duck", "Harbor House", "Vanguard", "National Pizza Pub"];
let racineRestaurants = ["Blue Bear", "Jus' Tips", "Olde Madrid", "Reefpoint Brew House", "The Maple Table"];
let burlingtonRestaurants = ["Pine Street Cafe", "Lucky Star Pub & Eatery", "Charcoal Grill",
                             "Napoli Restaurant & Pizzeria", "Burlington Tap and Smokehouse"];
let chicagoRestaurants = ["Flour Power", "Sushi Suite 202", "The Capital Grill", "Homeslice", "Taste of Chicago Restaurant"];
let modeOfTransport = ["Personal vehicle", "Public transit", "Uber", "On-foot", "Bicycle"];
let entertainment = ["Frisbee Golf", "Cinema", "Bowling", "Beach walk", "Pub crawl", "Geo-caching"];

// variables for options generated
let pickedDestination;
let pickedRestaurant;
let pickedModeOfTransport;
let pickedEntertainment;


function createDayTrip(){
    // get day trip plans
    let dayTripPlans = [];
    pickedDestination = destinations[Math.floor(Math.random) * destinations.length];
    pickedRestaurant = kenoshaRestaurants[Math.floor(Math.random) * kenoshaRestaurants.length];
    pickedModeOfTransport = modeOfTransport[Math.floor(Math.random) * modeOfTransport.length];
    pickedEntertainment = entertainment[Math.floor(Math.random) * entertainment.length];
    dayTripPlans.push(pickedDestination);
    dayTripPlans.push(pickedRestaurant);
    dayTripPlans.push(pickedModeOfTransport);
    dayTripPlans.push(pickedEntertainment);
    return dayTripPlans;
            
}

let createdDayTrip = createDayTrip();
console.log(createdDayTrip);

function displayDayTrip(){
    console.log(createdDayTrip[0]);
    console.log(createdDayTrip[1]);
    console.log(createdDayTrip[2]);
    console.log(createdDayTrip[3]);
}
/*
// generates random destination
function randomDestination(){
    pickedDestination = destinations[Math.floor(Math.random() * destinations.length)];
    return pickedDestination;
}
let createdDestination = randomDestination();
console.log(createdDestination);
*/