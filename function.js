// alert("My name is Bunmi");
// var student = prompt("What is your name?");
// console.log(student);

function sumNumbers(a, b, c, d) {
  console.log(a + b + c + d);
}
sumNumbers(10, 20, 2, 4);
// sumNumbers(12, 27);

// function multiplyNo(a, b) {
//   console.log(a * b);
// }
// multiplyNo(3, 10);

/* var firstNo = prompt("Input first number");
var secondNo = prompt("Input second number");
function sumNumbers() {
  console.log(firstNo + secondNo);
}
sumNumbers();*/

// Method One
function display() {
  console.log("Mr Taiwo");
}
display();

// Method Two Anonymous function
const addNumbers = function () {
  console.log("I am here");
};
addNumbers();

// Method Three Arrow Function
const divideNumbers = () => {
    console.log("Mr Taiwo");
  return "i am a girl";
};
console.log(divideNumbers());
