//1st Que
console.log('1st Answer');
var array = [1, 2, 3, 4, 5, 1, 3]; 
var result = [];
var target = 3; 

for(var i = 0; i < array.length; i++){
  if(array[i] == target){
      result.push(i);
    }
}
if(result == ""){
  console.log(-1)
}else{s
  console.log(result);
}


//2st Que
console.log('2st Answer');
var i, j;
for (i = 1; i <= 5; i++) {
   var pat= "";
   for (j = 5; j >= i; j--) {
    pat = pat + j;
  }
  console.log(pat);
}

//3st Que
console.log('3st Answer');
let numbers =[3, 2, 1, 4, 5, 45];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

//4st Que
console.log('4st Answer');
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
console.log(isAnagram('LISTEN', 'SILENT')); 
console.log(isAnagram('HELLO', 'JELLO'));

//5st Que
console.log('5st Answer');
function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("Hello"))







