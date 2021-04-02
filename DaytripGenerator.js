"use strict";
// This is a day trip generator for southern wisconsinites

let destinations = ["Milwaukee", "Chicago", "Kenosha", "Racine", "Burlington"];
let kenoshaRestaurants = ["La Fogata", "Ian's Pizza", "Brat Stop", "The Coffee Pot", "Tommy's"];
let milwaukeeRestaurants = ["La Merenda", "Odd Duck", "Harbor House", "Vanguard", "National Pizza Pub"];
let racineRestaurants = ["Blue Bear", "Jus' Tips", "Olde Madrid", "Reefpoint Brew House", "The Maple Table"];
let burlingtonRestaurants = ["Pine Street Cafe", "Lucky Star Pub & Eatery", "Charcoal Grill",
                             "Napoli Restaurant & Pizzeria", "Burlington Tap and Smokehouse"];
let chicagoRestaurants = ["Flour Power", "Sushi Suite 202", "The Capital Grill"];
let modeOfTransport = ["Personal vehicle", "Public transit", "Uber", "On-foot", "Bicycle"];
let entertainment = ["Frisbee Golf", "Cinema", "Bowling", "Beach walk", "Pub crawl"];
let yourDayTrip = [];

let pickedDestination;
let pickedRestaurant;
let pickedModeOfTransport;
let pickedEntertainment;

function randomDestination(){
    return destinations[Math.floor(Math.random() * 5)];
}

function randomRestaurant(){
    if(pickedDestination === "Milwaukee"){
        return milwaukeeRestaurants[Math.floor(Math.random() * 5)]
    }
    else if(randomDestination === "Chicago"){
        return chicagoRestaurants[Math.floor(Math.random() * 5)]
        }
    else if(randomDestination === "Kenosha"){
        return kenoshaRestaurants[Math.floor(Math.random() * 5)]
        }
    else if(randomDestination === "Burlington"){
        return burlingtonRestaurants[Math.floor(Math.random() * 5)]
    }
    else{
        return racineRestaurants[Math.floor(Math.random() * 5)]
    }
}

function randomModeOfTransport(){
    return modeOfTransport[Math.floor(Math.random() * 5)];
}

function randomEntertainment(){
    return entertainment[Math.floor(Math.random() * 5)];
}

let userInput = prompt("Would you like to randomly plan a day trip? (yes/no)");
if( userInput.toLowerCase() === 'yes'){
    pickedDestination = randomDestination();
    pickedRestaurant = randomRestaurant();
    pickedModeOfTransport = randomModeOfTransport();
    pickedEntertainment = randomEntertainment();
    console.log("Destination: " + pickedDestination);
    console.log("Restaurant: " + pickedRestaurant);
    console.log("Mode of transportation: " + pickedModeOfTransport);
    console.log("Entertainment: " + pickedEntertainment);
}
else{
    console.log("Okay, plan your own trip!")
}

// allow the user to change a part of the trip
