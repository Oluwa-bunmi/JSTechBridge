// if else if else
if (true) {
  console.log("Mr Taiwo");
}

// var weather = "sunny";
// if (weather === "rainy") {
//   console.log("Go out with umbrella");
// }

// else
// if weather is sunny, go out if weather is rainy stay home
var weather = "sunny";
if (weather === "sunny") {
  console.log("Go out");
} else {
  console.log("Stay home");
}

// else if
/* if my money is greater than the price say more than enough, if my money is less than 
 the price say work harder, if my money is equal to the price say exact amount */

var pocketMoney = 100;
var price = 100;
if (pocketMoney > price) {
  console.log("More than enough");
} else if (pocketMoney < price) {
  console.log("Work harder");
} else {
  console.log("Exact amount");
}

/* determine if a number is even or odd with conditional statement  */
var number = 1;
if (number % 2 === 0) {
  console.log("It is an even number");
} else {
  console.log("It is an odd number");
}
