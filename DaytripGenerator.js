"use strict";
// This is the day trip generator

let destinations = ["Milwaukee", "Chicago", "Kenosha", "Racine", "Burlington"];
let kenoshaRestaurants = ["La Fogata", "Ian's Pizza", "Brat Stop", "The Coffee Pot", "Tommy's"];
let milwaukeeRestaurants = [];
let racineRestaurants = [];
let burlingtonRestaurants = [];
let modeOfTransport = ["Personal Vehicle", "Public transit", "Uber", "On-foot"];
let entertainment = ["Frisbee Golf", "Cinema", "Bowling", ""];

function generateRandomInt(){
    return Math.floor(Math.random() * 6);
}
let randomNum = generateRandomInt();
console.log(randomNum);

function chooseDestination(){
    return destinations[generateRandomInt()];
}

let randomRestaurant = chooseDestination();
console.log(randomRestaurant);