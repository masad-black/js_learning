/*
js have different datatypes

1) null
if aasign to a vairable the mean there is not value existing

2) undefined
if declare a variable and no value is given the undefined is assigned automatically
undefined mean not null, but the value is not assigned

3) boolean
boolean can hve only 2 values true and false

4) number
this store a number(123) or a floating point (121.2332)

5) big int

6) string
this is basically cequence of character "sdlhsdl"

7) object

*/

// let val = null;
// let val2 = undefined;

// console.table([val, val2]);

// if (val) {
//   console.log("null is some value");
// } else if (val2) {
//   console.log("undefined is some value");
// }

// let num1 = 12112;
// let num2 = 2331.424;

// let str1 = "asad";

// what js does is the if the string is combined with number wiht (plus + operator) the js will convert the number into string and combine it with other one
// let val = "10" + 9090;
// let val2 = "1" * 30;
// let val3 = "20" - 30;
// let val4 = 1 + "1";

let val1 = "asad";
let val2 = 10;
let val3 = true;
let val4 = undefined;
let val5 = null;
let val6 = "true";
let val7 = 1;

// console.log("-> values: ", val1, val2, val3, val4, val5);

// console.log("-> types: ");
// console.table([
//   typeof val1,
//   typeof val2,
//   typeof val3,
//   typeof val4,
//   typeof val5,
// ]);

console.log("=> conversion Boolean");

/**
 (Number converion):

 "8889" -> 8899
 "kdk" -> NaN
 true -> 1
 false -> 0
 null -> 0
 undefined -> NaN

 (String conversion):

 "roueow" -> "kkfd"
 18098 -> "18098"
 undefind -> "undfined"
 null -> "null"

 (Boolean conversion):
 undefined -> false
 null -> false
 "slfsl" -> true
 12312 -> true
 0 -> false
 1 -> true

 */

// console.log(val7, typeof val7, typeof Boolean(val7), Boolean(val7));

// (++) if put at the end on the operand (x++) the value is assign first and then incremented
// but if put at the start of the operant (++x) the is incremented first and the assigned

let num1 = 10;
let num2 = --num1;

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
