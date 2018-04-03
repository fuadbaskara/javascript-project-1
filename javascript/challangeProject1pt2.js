// LEVEL 15
function addition(num1, num2) {
  var a = prompt("number for addition 1 :");
  var b = prompt("number for addition 2 :");
  var num1 = Number(a);
  var num2 = Number(b);
  return num1 + num2;
}
console.log("----------------------- lEVEL 15 -----------------------------")
console.log("hasil penambahan :", addition());

function substraction(num1, num2) {
  var a = prompt("number for substraction 1 :");
  var b = prompt("number for substraction 2 :");
  var num1 = Number(a);
  var num2 = Number(b);
  return num1 - num2;
}
console.log("hasil pengurangan :", substraction());

function multiply(num1, num2) {
  var a = prompt("number for multiply 1 :");
  var b = prompt("number for multiply 2 :");
  var num1 = Number(a);
  var num2 = Number(b);
  var result = num1 * num2;
  return result;
}
var multResult = multiply();
console.log("hasil pengalian :", multResult);

function divide(num1, num2) {
  var a = prompt("number for division 1 :");
  var b = prompt("number for division 2 :");
  var num1 = Number(a);
  var num2 = Number(b);
  var result = num1 / num2;
  return result;
}
var divResult = divide();
console.log("hasil pembagian :", divResult);

function modulo(num1, num2) {
  var a = prompt("number for modulo 1 :");
  var b = prompt("number for modulo 2 :");
  var num1 = Number(a);
  var num2 = Number(b);
  var result = num1 % num2;
  return result;
}
var modResult = modulo();
console.log("hasil modulo", modResult);
// LEVEL 16
function funcInfunc() {
  var funResult = addition() * substraction();
  return funResult;
}
console.log("----------------------- lEVEL 16 -----------------------------");
console.log("hasil pengalian dari func.penjumlahan dengan pengurangan adalah ", funcInfunc());
// LEVEL 17
console.log("----------------------- lEVEL 17 -----------------------------");
console.log("see LEVEL 18");
function squareArea(sideLength) {
  return sideLength * sideLength;
}
console.log("----------------------- lEVEL 18 -----------------------------");
console.log("The area of the square is :", squareArea(4));

function squarePerimeter(length) {
  return 4 * length;
}
console.log("The perimeter of this square is :", squarePerimeter(4));

function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log("The area of this circle is :", circleArea(5));

function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log("The circumference of this circle is :", circleCircumference(5));

function cubeArea(sideLength) {
  return 6 * Math.pow(sideLength, 2);
}

function cubeVolume(length, width, height) {
  return length * width * height;
}
console.log("The volume of this cube is :", cubeVolume(6, 6, 6));

function tubeArea(radius, height) {
  return (2 * Math.PI * radius * height) + (2 * Math.PI * Math.pow(radius, 2));
}
console.log("The area of this Tube is :", tubeArea(4, 8));

function tubeVolume(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height;
}
// LEVEL 19
console.log("----------------------- lEVEL 19 -----------------------------");
console.log("this is the area of this square based on addition function", squareArea(addition()));
console.log("this is the volume of this cube based on addition, substraction and modulo function",
  cubeVolume(addition(), substraction(), divide()));
// LEVEL 20

function dateFunction() {
  var today = new Date();
  var dd = today.getDate();
  console.log(dd);
  return dd;
}

function monthFunction() {
    var today = new Date();
    var mm = today.getMonth() + 1;
    return mm;
}

function dayFunction() {
  var today = new Date();
  var da = today.getDay() + 1;
  return da;
}

function fullYearFunction() {
  var today = new Date();
  var yyyy = today.getFullYear();
  return yyyy;
}

function hoursFunction() {
  var today = new Date();
  var hh = today.getHours();
  return hh;
}

function minutesFunction() {
  var today = new Date();
  var mn = today.getMinutes();
  return mn;
}

function secondsFunction() {
  var today = new Date();
  var se = today.getSeconds();
  return se;
}

var date = dateFunction() + '/' + monthFunction() + '/' + fullYearFunction();
var times = hoursFunction() + ':' + minutesFunction() + ':' + secondsFunction();
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = times;

// LEVEL 24
function addressBook(name, address, phoneNumber, postCode) {
  var arrayAddressBook = [];
  arrayAddressBook.push(name);
  arrayAddressBook.push(address);
  arrayAddressBook.push(phoneNumber);
  arrayAddressBook.push(postCode);
  return arrayAddressBook;
}
console.log("----------------------- lEVEL 25 -----------------------------");
console.log(addressBook("fuad", "jakarta", 123412121, 12530));
console.log(addressBook("fadhil", "jakarta", 139712731, 12535));
console.log(addressBook("Pak Ali", "jakarta", 123412121, 12540));
console.log(addressBook("Dei", "jakarta", 123412121, 12545));

console.log("----------------------- lEVEL 26 -----------------------------");
var newAddressBook = [];

function addressBookFunc(name, address, phoneNumber, postCode) {
  var objectAddressBook = {};
  objectAddressBook.name = name;
  objectAddressBook.address = address;
  objectAddressBook.phoneNumber = phoneNumber;
  objectAddressBook.postCode = postCode;
  newAddressBook.push(objectAddressBook);
  return newAddressBook;
}

addressBookFunc("fuad", "jakarta", 123412121, 12530);
addressBookFunc("fadhil", "jakarta", 139712731, 12535);
addressBookFunc("Pak Ali", "jakarta", 123412121, 12540);
addressBookFunc("Dei", "jakarta", 123412121, 12545);

console.log(newAddressBook);

console.log("------ search in phonebook ------");

function searchPhoneBook(search) {
  let searchResult = newAddressBook.filter(function(searchName) {
    return searchName["name"].toLowerCase().indexOf(search.toLowerCase()) != -1;
  });
  return searchResult;
}
console.log(searchPhoneBook("FUAD"));

console.log("------ delete in phonebook ------");

function deleteAddress(deleteIndex) {
  var deleteArray = newAddressBook;
  deleteArray.splice(deleteIndex, 1);

  return deleteArray;
}

console.log(deleteAddress(1));
