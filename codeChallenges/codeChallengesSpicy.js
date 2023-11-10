// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number.
// If the Number is a multiple of 3, print "Fizz".
// If the Number is a multiple of 5, print "Buzz".
// If the Number is a multiple of both 3 and 5, print "FizzBuzz".
// If the Number is not a multiple of either, print the Number itself.

var num = 1.33;
if (Number.isInteger(num/3) && Number.isInteger(num/5)){
    console.log("FizzBuzz");
} else if (Number.isInteger(num/3)){
    console.log("Fizz");
}  else if (Number.isInteger(num/5)){
    console.log("Buzz");
} else {
    console.log(`${num}`);
}