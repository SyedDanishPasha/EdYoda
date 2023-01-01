// // Arithmatic

var num1 = 50;
var num2 = 20;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multipilcation
console.log(num1 / num2); // divison (Quotient)
console.log(num1 % num2); // modules (reminder)

//Increment & Decement
num1++;
num2--;
console.log(num1, num2);

var x = num1++;
console.log(x);
console.log(num1);

var y = ++num2;
console.log(y);
console.log(num2);

var numRes = 30;
var r = numRes++;
r--;
console.log(r);
console.log(numRes);

var x = ++numRes;
x++;
console.log(x);
console.log(numRes);

// Opeartor Precedence (priority of operator in execution)
// Brackets
// / *
// + -
// L -> R

var result = 20 + (90 / 2) * 40 + 69 - 90;
console.log(result);

// Assignment operator (=)
var val = 20;
val += 5; 
val -= 5; 

console.log(typeof NaN); //number

// String Operator (+)
var str = "hello";
var strTwo = "world";
console.log(str + strTwo);
console.log(str - strTwo);
console.log(str * strTwo);

console.log(str + 20); 
console.log(20 + str);
console.log(20 + 40 + str); 
console.log(str + 20 + 40);
console.log(20 * 20 + "world");
console.log("hello" + "world" / 2); 

// implicit coersion (automatic type conversion)
console.log("20" - 20);
console.log("20" + 20);
console.log("" + 10); 
console.log("10" / 10);
console.log(true > false);
console.log(true + false);
console.log(true + false > 2);

//operator predecence
//check type operand (number, numeric, non-numeric)
console.log(null == undefined); 
console.log(null === undefined);

//Comaprison & Logical operators
var a = 10;
var b = "10";

console.log(a == "hello"); 

// conditional statement
// if
// syntax
// if(condition) {
//    block of code
// }

var firstName = "syed";
var lastName = "pasha";
if (firstName === "") {
  console.log("correct");
}

// if else
// syntax
// if(condition) {
//     block of code;
//  }else{
//     block of code;
//  }

if (true) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }

// Ternary operator (condition) ? () : ()
var c = firstName == "syed" ? "correct" : "incorrect";
console.log(c);

// else if
// syntax
// if else
// syntax
// if(condition) {
//     block of code;
//  }else if(condition) {
//     block of code;
//  }else if(condition) {
//     block of code;
//  }else{
//     block of code;
// }

if (firstName === "alina" && lastName === "joe") {
    console.log("correct");
  } else if (firstName === "alex") {
    console.log(firstName);
  } else if (lastName === "joe") {
    console.log(lastName);
  } else {
    console.log("incorrect");
  }

// switch
// syntax
// switch(variable){
//     case 0:
//         block of code;
//         break;
//     case 1:
//         block of code;
//         break;

//     .
//     .
//     .
//     .
//     .

//     case 5:
//         block of code;
//         break;

//     default :
//         block of code;
// }

var age = 18;
switch (age) {
  case 0:
    console.log("incorrect");
    break;
  case 2:
    console.log("incorrect");
    break;
  case 18:
    console.log("eligible");
    break;
  default:
    console.log("default");
}

//greatest of 3 numbers
var x = 90, y = 89, z = 100, max = 0;

if (x > y) {
  max = x;
} else {
  max = y;
}

if (max > z) {
  console.log(max + " is greatest");
} else {
  console.log(z + " is greatest");
}

console.log(Math.max(x, y, z));

//check if a number is even or odd
var numEven = 20;

if (numEven !== 0) {
  if (numEven % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}