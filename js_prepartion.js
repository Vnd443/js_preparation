/*JavaScript is the world's most popular programming language.
JavaScript is the programming language of the Web.
JavaScript is easy to learn.   */

console.log('Hello World!');


console.log(1+2);  // o/p- 3 add
console.log(2-1);  // o/p- 1 sub
console.log(2*1);  // o/p- 2 mul
console.log(20/4); // o/p- 5 div
console.log(5%2);  // o/p- 1 remainder


//there are 3 variables in js: 

// 1.var- Variables are containers for storing data (values). keyword - 'var'.

var x=5;
x=4; // x=4
var x=6; // x=6

// 2.let- The let keyword was introduced in ES6 (2015). Variables defined with let cannot be Redeclared.

let xx=23;
xx=41; // x=41
// let xx=56 - wrong can't declare val again.


/* 3.const- The const keyword was introduced in ES6 (2015).
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.*/

const xxx=56; // cant change val for var or reassgin or operations.
//x=42 - not allow x=46 cannot be Redeclared,cannot be Reassigned.


// Data Types 

// 1.Primitives/ Value Types -string,number,boolen,undefined,null,symbols
let yourName = 'Naveen';           // string 
let yourAge = 21;                  // number
let truth=true;                        // boolen
let dif;                             // undefined
let iphone=null;                        // value null   o/p- typeof obj

//2.Non -Primitives/ Reference Types -objects,array,function,map,set
let bio={ name:'naveen', age:21 }; // obj
let friuts=['apple','banana'];     // array

//conditons statement using if,if else,else;
let raviAge=22;
if (raviAge<18){
    console.log('minor');
}
else if (raviAge>=18){
    console.log('major');
}
else {
    console.log('Invalid age');
}


/*
loops in js- 

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true 
switch - used to perform different actions based on different conditions.    */

//for loop
for (let num=0; num<=5; num++){
    console.log(num);
}

//for/in
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

//for/each -forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) { // inside function 3 arg* -item value,item index,arr itself.
  txt += value;
}
console.log(txt)

//for/of
const num1 = [45, 4, 9, 16, 25]; 
for (let i of num1){
    console.log(i);
}

//while
let num2=0;
while (num2<5){
    console.log('the num is',num2);
    num2++;
}

//do while
/*do {
    // code block to be executed
  }
  while (condition);     */

//Switch Statement
let day;
switch (5) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day='invalid';
  }

/*str1=['one','two','three','four','five','six','seven'];
console.log(str1);*/


//strings methods
let fruit = "banana";
console.log(fruit.length); //length 
console.log(fruit.indexOf('nan')) // index value
console.log(fruit.slice(2,6)); //slice(start, end)
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); //to get value by index
console.log(fruit[2]);
//console.log(friuts.split(','))
console.log(fruit.trim());
console.log(fruit.includes('ana')); //true or flase ->determines whether a string contains the characters of a specified string.
console.log(fruit.concat(' is a fruit')); // join two or more strings.
console.log(fruit.startsWith('ba'));
console.log(fruit.endsWith('ana'));
console.log(fruit.substring(6)); //returns the part of the string between the start and end indexes, or to the end of the string.


//array

let fruits2=['apple','banana','orange','papaya','grapes'];
let fruits3=new Array('apple','banana','orange','papaya','grapes');
 
console.log(fruits2,fruits3)
console.log(fruits2[2]) //access the index val of 2nd

fruits2[4]='pineapple'
for (let i=0;i<fruits2.length;i++){
  console.log(fruits2[i])
}

//array methods
  
console.log(fruits2.toString());       //  convert array to string
console.log(fruits2.join(' * '));      //   join
console.log(fruits2.pop());            //   remove
console.log(fruits2.push('blackberry')); // append
console.log(fruits2.length);            //  length
fruits2[5]='pineapple';                 // update the value
console.log(fruits2);                   
console.log(fruits2.shift());           // remove the first value from array
console.log(fruits2);
console.log(fruits2.unshift('apple'));  // append value at front
console.log(fruits2)
console.log(fruits2.indexOf('papaya'))   //find the index val

let vegetables=['tomato','potato','broccoli','asparagus']; 

let fruits_and_vegetables=fruits2.concat(vegetables);   // add array to other to new array
console.log(fruits_and_vegetables);
//or
// speard operator
//let fruits_and_vegetables=[...fruits2,...vegetables];

console.log(fruits_and_vegetables.slice(1,8));    

let someRandomNo= [3,25,23,434,27,64,465,3554,654,57,534,646,343,35,687,335,545,22,65,667,879];
console.log(someRandomNo.sort());
console.log(someRandomNo.reverse());

console.log(someRandomNo.sort(function(a,b){return a-b}));   // asc method
console.log(someRandomNo.sort(function(a,b){return b-a}));   // desc mothod

console.log(fruits_and_vegetables.splice(4,7)); //arr.splice(Start, Delete Count, Item1, Item2 ... ) items can add to array



//objects

let person1 = {
  firstName: "naveen",
  lastName: "venna",
  age: 21,
};

console.log(person1);
console.log(person1.age); // Dot Notation
console.log(person1['age']); // Bracket Notation


