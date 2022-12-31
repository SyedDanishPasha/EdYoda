// Strings ( ' ' or " " )
var fistName = "Syed";
var lastName = 'Pasha';

// alert (fistName + lastName); //SameLine 

// alert (fistName + "\n" +lastName ); //NextLine

var str = "Syed Danish Pasha";

console.log(typeof(str)); //check the type of datatyp used

console.log(str.length); // find lenth 
console.log(str.indexOf('sh')); // find index of specifc char
console.log(str.indexOf('sh', 11)); //find index of specific char after a particular index
console.log(str.lastIndexOf('sh')); //find index from end
console.log(str.indexOf('Danny')); // If the value dosent match from the given string the result will be -1
console.log(str.search('sh')); // find index


console.log(str.slice(5)) //print string from spectic index till end
console.log(str.slice(5,12)) //print string from specifci start and end index

var str1 = '  A full stack developer is someone who works with both the front end and back end of a web application.   '

console.log(str1.replace('end', 'End')); // replace the specified, (firs word from the start)
console.log(str1.replaceAll('end', 'End')); // replace all the specifced word 
console.log(str1.trim()); //trims all the extra space from the start and end of a string
console.log(str1.charAt(15)); // prints the specific char at the particular index
console.log(str1.charCodeAt(15)); // prints the char code of sprcific char at the particualr index
console.log(str1.toLowerCase()); // converts the entire string to lower case
console.log(str1.toUpperCase()); // converts the entire string to UPPER CASE

console.log(str1.endsWith(' ')); //checks if the string end with specific char
console.log(str.endsWith(' '));

console.log(str1.match(/end/g).length); //counts the no. times the specific word is present is the gien string

// Numbers

//Types
// Numaric string = '64655131';
// Non-numaric string = 'kaj_+()-_';
// Alpha string = 'asahhljhdb';
// Alpha-numaric string = 'askjd4651'

var a = 10;
var b = 5.02;

console.log(typeof(a));
console.log(typeof(b));

// Conversion (explicit)
// Number to String
console.log(a.toString()); // 10 
console.log(a.toFixed(5)); // 10.0000
console.log(a.toExponential(3)); // 10.000e+1

// String to Number
console.log(parseInt('6969.69'));
console.log(parseFloat('69.69'));
console.log(Number(96));
console.log(Number('adssdkj'));// NaN
console.log(Number());// 0
console.log(Number(' '));// 0
console.log(Number('asdfd451'));// NaN
console.log(parseInt('9848968adfhb'));// 984896

// Boolean (true or false)
console.log(90>9);
console.log(90<9);

//Boolean to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//undefined
var x;
console.log(x);
console.log(typeof(x));

x = 20;
console.log(x);

//nll
var y = null;
console.log(y);
console.log(typeof(y));

y = 2.0655;
console.log(y);

// Operator
// Comparison Operator

var a = 9;
var b = '9';

console.log(a == b); // Only values
console.log(a === b); // Value and Datatype (strict checking)

console.log(a != b);
console.log(a !== b);

console.log(a > b);
console.log(a < b);
console.log(a <= b);

// Logical Operator "&&" - and, "||" - or, "!" - not
console.log(a == b && a === b); // checks if both the conditions are correct (TT-T) (TF-F) (FF-F)
console.log(a == b || a === b); // check if either of the condition are correct (TT-T) (TF-T) (FF-F)
console.log(!(a === b)); // checks the condition and reverse 