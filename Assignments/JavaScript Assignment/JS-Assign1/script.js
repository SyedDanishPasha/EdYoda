// //1nd Que
// console.log("1st Answer");
// var str1 = 'Today is';
// var str2 = '      a beautiful day     ';
// var str3 = ' In Hawaii.     ';
// var result = str1 + str2.slice(5,18) + str3.trim();
// console.log(result);

// //2nd Que
// console.log("2st Answer");
// var enteredAlphabet = "e"

// switch(enteredAlphabet){
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(enteredAlphabet+" is  a Vowel");
//         break;
//     default:
//         if((enteredAlphabet>='A' && enteredAlphabet<='Z') || (enteredAlphabet>='a' && enteredAlphabet<='z')){
//             console.log(enteredAlphabet+ " is an Consonant");
//         }else{
//             console.log(enteredAlphabet+ " is an Non-alphabet");
//         }
//     }

// //3nd Que
// console.log("3rd Answer");
// var numb1 = Number(prompt('Enter first number:'));
// var numb2 = Number(prompt('Enter second number:'));

// var operator = prompt('Enter operator ( either +, -, * or / ):');

// var result;

// if (operator == '+') {
//     result = numb1 + numb2;
// }
// else if (operator == '-') {
//     result = numb1 - numb2;
// }
// else if (operator == '*') {
//     result = numb1 * numb2;
// }
// else {
//     result = numb1 / numb2;
// }

// console.log(`${numb1} ${operator} ${numb2} = ${result}`);

// //4th Que
// console.log("4th Answer");
// var x = Number(prompt('Enter the 1st side'));
// var y = Number(prompt('Enter the 2nd side'));
// var z = Number(prompt('Enter the 3rd side'));

// if (x + y <= z || y + z <= x || z + x <= y){
//   console.log('Incorrect input provided');
// }
// else if ((x > 0 && y >0 && z >0 ) && (x == y && y == z && z == x)){
//     console.log('Equilateral Triangle');
// }
// else if ((x > 0 && y >0 && z >0 ) && (x == y || y == z || z == x)){
//    console.log('Isosceles Triangle');
// }
//  else {
//    console.log('Scalene Triangle');
// }

// //5th Que
// console.log("5th Answer");
// var unit = prompt('Enter the Units Consumed');
// var  amt, total;
 
// if( unit > 1 && unit <= 50){
//    amt = unit * 0.5; 
// }else if( unit > 51 && unit <= 150){
//    amt = 50 * 0.5 + (unit-50) * 0.75;
// }else if( unit > 151 && unit <= 250){
//     amt = 50 * 0.5 + 100 * 0.75 + (unit-150) * 1.20;
// }else if( unit > 250){
//     amt = 50 * 0.5 + 100 * 0.75 + 100 * 1.20 +(unit-250) * 1.50;
// }
// total = (amt + amt * 0.2);
// console.log(total);




