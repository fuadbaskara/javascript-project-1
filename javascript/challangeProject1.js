const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";

console.log("----------------------- lEVEL 4 -----------------------------");
console.log(sentenceA);
console.log(sentenceB);
// LEVEL 5
const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;
`$(sentenceA) $(sentenceB)`

console.log("----------------------- lEVEL 5 -----------------------------");
console.log(sentenceC);
console.log(sentenceD);
// LEVEL 6
var normal = sentenceD
var uppercase = normal.toUpperCase();

console.log("----------------------- lEVEL 6 -----------------------------");
console.log(uppercase);
// LEVEL 7
var normal = sentenceD
var str = normal.toLowerCase();
str = str.split(' ');

console.log("----------------------- lEVEL 7 -----------------------------");
console.log(uppercase);
console.log(str);

for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
str = str.join(' ');

console.log(str);
// level 8
var number1 = 10;
var fixNumber = 5
var number2 = 12;

console.log("----------------------- lEVEL 8 -----------------------------");
if (number1 > fixNumber) {
  console.log("number 1: ", number1);
  console.log("Determine Number: ", fixNumber);
  console.log("this number is bigger than ", fixNumber);
} else {
  console.log("number 1: ", number1);
  console.log("Determine Number: ", fixNumber);
  console.log("this number is smaller than ", fixNumber);
}
// LEVEL 9
var result = (number1 < number2);
console.log("----------------------- lEVEL 9 -----------------------------");
console.log("number 1 :", number1);
console.log("number 2 :", number2);

if (result == false) {
  console.log("which one of this number is bigger ?");
  console.log(number1);
} else if (result == true) {
  console.log("which one of this number is bigger ?");
  console.log(number2);
} else {
  console.log("unknown output");
}
// LEVEL 10
console.log("----------------------- lEVEL 10 -----------------------------");
console.log("number 1: ", number1);
console.log("number 2: ", number2);
(number1 < number2) ? console.log("which one of this number is bigger ?", number2):
  console.log("which one of this number is bigger ?", number1)
// LEVEL 11
if ((number1 > 1) && (number1 < 20)) {
  console.log("----------------------- lEVEL 11 -----------------------------");
  console.log("number 1 :", number1);
  console.log("this number is in range of 1 until 20");
} else {
  console.log("----------------------- lEVEL 11 -----------------------------");
  console.log("number 1 :", number1);
  console.log("this number is NOT in range of 1 until 20");
}
// LEVEL 12
function branchFunction(number1, number2) {

  if ((number1 > 1) && (number1 < 20)) {
    console.log("----------------------- lEVEL 12 -----------------------------");
    console.log("number 1 :", number1);
    console.log("this number is in range of 1 until 20");
  } else {
    console.log("----------------------- lEVEL 12 -----------------------------");
    console.log("number 1 :", number2);
    console.log("this number is NOT in range of 1 until 20");
  }

}
var branchResult = branchFunction(number1, number2);
console.log(branchResult);
// LEVEL 13
var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("----------------------- lEVEL 13 -----------------------------");
console.log("random number :", randomNumber);
// LEVEL 14
console.log("----------------------- lEVEL 14 -----------------------------");
console.log("see LEVEL 15");
