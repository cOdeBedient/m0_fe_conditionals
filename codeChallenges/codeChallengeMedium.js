// Write a program that evaluates the status of the variables below, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental


var goodDrivingRecord = false;
var age = 2;
if (goodDrivingRecord && age > 25){
    console.log("You qualify for a discount!!")
} else if (goodDrivingRecord || age > 25){
    console.log("You will have to pay full price.")
} else {
    console.log("Someone else will need to sign for you.")
}