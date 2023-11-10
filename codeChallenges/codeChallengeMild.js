// Write a JavaScript program that defines a variable that stores a Number.
// The program should print out the String "even" if the Number is even,
// and the String "odd" if the Number is odd.
// Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var num = -4.3;
if (Number.isInteger(num/2)){
    console.log(`${num} is even!`)
} else if (Number.isInteger(num)){
    console.log(`${num} is odd!`)
} else {
    console.log("Undefined: A non-integer is neither odd nor even")
}