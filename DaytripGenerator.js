"use strict";
// This is a day trip generator for southern wisconsinites


// arrays for random selections
let destinations = ["Milwaukee", "Chicago", "Kenosha", "Racine", "Burlington"];
let kenoshaRestaurants = ["La Fogata", "Ian's Pizza", "Brat Stop", "The Coffee Pot", "Tommy's"];
let milwaukeeRestaurants = ["La Merenda", "Odd Duck", "Harbor House", "Vanguard", "National Pizza Pub"];
let racineRestaurants = ["Blue Bear", "Jus' Tips", "Olde Madrid", "Reefpoint Brew House", "The Maple Table"];
let burlingtonRestaurants = ["Pine Street Cafe", "Lucky Star Pub & Eatery", "Charcoal Grill",
                             "Napoli Restaurant & Pizzeria", "Burlington Tap and Smokehouse"];
let chicagoRestaurants = ["Flour Power", "Sushi Suite 202", "The Capital Grill", "Homeslice", "Taste of Chicago Restaurant"];
let modeOfTransport = ["Personal vehicle", "Public transit", "Uber", "On-foot", "Bicycle"];
let entertainment = ["Frisbee Golf", "Cinema", "Bowling", "Beach walk", "Pub crawl"];

// variables for options generated
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

// displays current choices
function displayTrip(){
    console.log("\n" + "Destination: " + pickedDestination);
    console.log("Restaurant: " + pickedRestaurant);
    console.log("Mode of transportation: " + pickedModeOfTransport);
    console.log("Entertainment: " + pickedEntertainment);
}

let userInput = prompt("Would you like to plan a random day trip? (yes/no)");
if(userInput.toLowerCase() === 'yes'){
    pickedDestination = randomDestination();
    pickedRestaurant = randomRestaurant();
    pickedModeOfTransport = randomModeOfTransport();
    pickedEntertainment = randomEntertainment();
    // might not need the line below
    // yourDayTrip = [pickedDestination, pickedRestaurant, pickedModeOfTransport, pickedEntertainment]
    displayTrip();

    let tripImpending = true;
    while(tripImpending){
    let acceptancePrompt = prompt("Do you like this trip? (yes/no)")
    acceptancePrompt.toLowerCase();
    if(acceptancePrompt === 'yes'){
        tripImpending = false;
        console.log("Enjoy the day trip!");
        break;
    }
    else{
        let userChange = prompt("What part will you change? (destination/restaurant/transportation/entertainment)")
        if(userChange.toLowerCase() === 'destination'){
            pickedDestination = randomDestination();
            pickedRestaurant = randomRestaurant();
            displayTrip();
            console.log("We changed the restaurant since you changed destinations.")
        }
        else if(userChange.toLowerCase() === 'restaurant'){
            pickedRestaurant = randomRestaurant();
            displayTrip();
        }
        else if(userChange.toLowerCase() === 'transportation'){
            pickedModeOfTransport = randomModeOfTransport();
            displayTrip();
        }
        else if(userChange.toLowerCase() === 'entertainment'){
            pickedEntertainment = randomEntertainment();
            displayTrip();
        }
        else{
            console.log("Type that again");
        }
    }
}
}
else{
    console.log("Okay, plan your own trip!")
}





/*
// allow the user to change a part of the trip
let tripImpending = true;
while(tripImpending){
    let acceptancePrompt = prompt("Do you like this trip? (yes/no)")
    acceptancePrompt.toLowerCase();
    if(acceptancePrompt === 'yes'){
        tripImpending = false;
        displayTrip();
        console.log("Enjoy the day trip!");
        break;
    }
    else{
        let userChange = prompt("What part will you change? (destination/restaurant/transportation/entertainment)")
        if(userChange.toLowerCase() === 'destination'){
            pickedDestination = randomDestination();
            pickedRestaurant = randomRestaurant();
            displayTrip();
            console.log("We changed the restaurant since you changed destinations.")
        }
        else if(userChange.toLowerCase() === 'restaurant'){
            pickedRestaurant = randomRestaurant();
            displayTrip();
        }
        else if(userChange.toLowerCase() === 'transportation'){
            pickedModeOfTransport = randomModeOfTransport();
            displayTrip();
        }
        else if(userChange.toLowerCase() === 'entertainment'){
            pickedEntertainment = randomRestaurant();
            displayTrip();
        }
        else{
            console.log("Type that again");
        }
    }
}


let acceptancePrompt = prompt("Do you want this trip? (yes/no)")
acceptancePrompt.toLowerCase();
if(acceptancePrompt === 'yes'){
    console.log("Great! Enjoy the trip!")
}
else{
    let tripImpending = true;
    while(tripImpending){
        let userChangePrompt = prompt("What part will you change? (destination/restaurant/transportation/entertainment");
        if(userChangePrompt === 'destination'){
            pickedDestination = randomDestination();
            pickedRestaurant = randomRestaurant();
            console.log("We changed the restaurant since you changed destinations");
        }
        else if(userChangePrompt === 'restaurant'){
            pickedRestaurant = randomRestaurant();
        }
        else if(userChangePrompt === 'transportation'){
            pickedModeOfTransport = randomModeOfTransport();
        }
        else if(userChangePrompt === 'entertainment'){
            pickedEntertainment = randomEntertainment();
        }
        else{
            alert("Sorry, try again")
        }

    }
}
*/


/*
idk if i need this

do{
    userAcceptedTrip = prompt("")
}
while(userAcceptedTrip = false)
*/
