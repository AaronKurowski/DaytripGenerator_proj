"use strict";
// This is a day trip generator for southern wisconsinites

// arrays for random selections
let destinations = ["Milwaukee", "Chicago", "Kenosha", "Racine", "Burlington"];
let kenoshaRestaurants = ["La Fogata", "Ian's Pizza", "Brat Stop", "The Coffee Pot", "Tommy's", "Honada", "Luigi's", 
                          "Sazzy B", "House of Gerhard"];
let milwaukeeRestaurants = ["La Merenda", "Odd Duck", "Harbor House", "Vanguard", "National Pizza Pub", "Zarletti", ];
let racineRestaurants = ["Blue Bear", "Jus' Tips", "Olde Madrid", "Reefpoint Brew House", "The Maple Table"];
let burlingtonRestaurants = ["Pine Street Cafe", "Lucky Star Pub & Eatery", "Charcoal Grill",
                             "Napoli Restaurant & Pizzeria", "Burlington Tap and Smokehouse", "Lucky Star", "The Waterfront"];
let chicagoRestaurants = ["Flour Power", "Sushi Suite 202", "The Capital Grill", "Homeslice", "Taste of Chicago Restaurant", "The House of Blues"];
let modeOfTransport = ["Personal vehicle", "Public transit", "Uber", "On-foot", "Bicycle", "Helicopter"];
let entertainment = ["Frisbee Golf", "Cinema", "Bowling", "Beach walk", "Pub crawl", "Geo-caching"];

// variables for options generated
let pickedDestination;
let pickedRestaurant;
let pickedModeOfTransport;
let pickedEntertainment;

// generates random destination
function randomDestination(){
    return destinations[Math.floor(Math.random() * destinations.length)];
}

// generates random restaurant based on the city chosen
function randomRestaurant(){
    if(pickedDestination === "Milwaukee"){
        return milwaukeeRestaurants[Math.floor(Math.random() * milwaukeeRestaurants.length)]
    }
    else if(pickedDestination === "Chicago"){
        return chicagoRestaurants[Math.floor(Math.random() * chicagoRestaurants.length)]
        }
    else if(pickedDestination === "Kenosha"){
        return kenoshaRestaurants[Math.floor(Math.random() * kenoshaRestaurants.length)]
        }
    else if(pickedDestination === "Burlington"){
        return burlingtonRestaurants[Math.floor(Math.random() * burlingtonRestaurants.length)]
    }
    else{
        return racineRestaurants[Math.floor(Math.random() * racineRestaurants.length)]
    }
}

// generates random mode of transportation
function randomModeOfTransport(){
    return modeOfTransport[Math.floor(Math.random() * modeOfTransport.length)];
}

// generates random form of entertainment
function randomEntertainment(){
    return entertainment[Math.floor(Math.random() * entertainment.length)];
}

// displays current choices
function displayTrip(){
    console.log("\n" + "Destination: " + pickedDestination);
    console.log("Restaurant: " + pickedRestaurant);
    console.log("Mode of transportation: " + pickedModeOfTransport);
    console.log("Entertainment: " + pickedEntertainment);
}

// removes a specific element from an array
function removeArrayElement(array, value){
    let index = array.indexOf(value);
    if(index >= 0){
        array.splice(index, 1);
    }
    return array;
}

// beginning of application
let userInput = prompt("Would you like to plan a random day trip? (yes/no)");
if(userInput.toLowerCase() === 'yes'){
    pickedDestination = randomDestination();
    pickedRestaurant = randomRestaurant();
    pickedModeOfTransport = randomModeOfTransport();
    pickedEntertainment = randomEntertainment();
    displayTrip();

    // while loop for user changes
    let tripImpending = true;
    while(tripImpending){
        let acceptancePrompt = prompt("Do you want this trip? (yes/no)")
        if(acceptancePrompt.toLowerCase() === 'yes'){
            tripImpending = false;
            console.log("Enjoy your trip!");
            break;
        }
        else if(acceptancePrompt.toLowerCase() !== 'yes' && acceptancePrompt.toLowerCase() !== 'no'){
            alert("Incorrect input");
        }
        else{
            let userChange = prompt("What part will you change?" + "\n" + "Type the word or corresponding number to make changes." + 
                                    "\n" + "1=destination, 2=restaurant, 3=transportation, 4=entertainment")

            // change destination
            if(userChange.toLowerCase() === 'destination' || userChange === '1'){
                removeArrayElement(destinations, pickedDestination);
                if(destinations.length === 0){
                    console.log("\n" + "We've run out of destination!");
                    break;
                }
                else{
                    pickedDestination = randomDestination();
                    pickedRestaurant = randomRestaurant();
                    displayTrip();
                    console.log("\n" + "NOTE: We changed the restaurant since you changed destinations.");
                }
            }

            // change restaurant
            else if(userChange.toLowerCase() === 'restaurant' || userChange === '2'){
                if(pickedDestination === "Milwaukee"){
                    removeArrayElement(milwaukeeRestaurants, pickedRestaurant)
                    if(milwaukeeRestaurants.length === 0){
                        pickedRestaurant = "No Milwaukee restaurants left";
                        displayTrip();
                    }
                    else{
                        pickedRestaurant = randomRestaurant();
                        displayTrip();
                    }
                }
                else if(pickedDestination === "Kenosha"){
                    removeArrayElement(kenoshaRestaurants, pickedRestaurant);
                    if(kenoshaRestaurants.length === 0){
                        pickedRestaurant = "No Kenosha restaurants left";
                        displayTrip();
                    }
                    else{
                        pickedRestaurant = randomRestaurant();
                        displayTrip();
                    }
                }
                else if(pickedDestination === "Chicago"){
                    removeArrayElement(chicagoRestaurants, pickedRestaurant);
                    if(chicagoRestaurants.length === 0){
                        pickedRestaurant = "No Chicago restaurants left";
                        displayTrip();
                    }
                    else{
                        pickedRestaurant = randomRestaurant();
                        displayTrip();
                    }
                }
                else if(pickedDestination === "Burlington"){
                    removeArrayElement(burlingtonRestaurants, pickedRestaurant);
                    if(burlingtonRestaurants.length === 0){
                        pickedRestaurant = "No Burlington restaurants left";
                        displayTrip();
                    }
                    else{
                        pickedRestaurant = randomRestaurant();
                        displayTrip();
                    }
                }
                else{
                    removeArrayElement(racineRestaurants, pickedRestaurant);
                    if(racineRestaurants.length === 0){
                        pickedRestaurant = "No Racine restaurants left";
                        displayTrip();
                    }
                    else{
                        pickedRestaurant = randomRestaurant();
                        displayTrip();
                    }
                }
                
            }

            // change transportation
            else if(userChange.toLowerCase() === 'transportation' || userChange === '3'){
                removeArrayElement(modeOfTransport, pickedModeOfTransport);
                if(modeOfTransport.length === 0){
                    pickedModeOfTransport = "No modes of transportation left";
                    displayTrip();
                }
                else{
                    pickedModeOfTransport = randomModeOfTransport();
                    displayTrip();
                }
            }

            // change entertainment
            else if(userChange.toLowerCase() === 'entertainment' || userChange === '4'){
                removeArrayElement(entertainment, pickedEntertainment);
                if(entertainment.length === 0){
                    pickedEntertainment = "No entertainment options left";
                    displayTrip();
                }
                else{
                    pickedEntertainment = randomEntertainment();
                    displayTrip();                    
                }
            }
            else{
                alert("Incorrect input")
            }
        }
    }
}
else{
    console.log("Okay, plan your own trip!")
}
