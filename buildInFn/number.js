let num1 = 100;
let num2 = 112.191;
let num3 = Number(32.3324);
let numObj = new Number(1122);

// console.log(typeof num1, typeof num2, typeof num3, typeof numObj);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);

// console.log(`is finite or not: ${Number.isFinite(Number.MAX_SAFE_INTEGER)}`);
// console.log(`is integer or not: ${Number.isInteger(Number.MIN_SAFE_INTEGER)}`);
// console.log(`is NaN or not: ${Number.isNaN()}`);

// console.log(num2.toFixed(10));
// console.log(
//   numObj.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
// );

// console.log(Math);
const min = 20;
const max = 50;

// console.log(Math.round(Math.random() * max));
// console.log(Math.random() + min);

// console.log(Math.round(Math.random() * (max - min + 1)) + min);

// console.log(Math.round(Math.random() * (max - min)));

console.log(typeof Number(8989), Number(8989));
console.log(typeof Number("8989"), Number("8989"));
console.log(typeof Number("877a"), Number("877a"));
console.log(typeof Number(true), Number(true));
console.log(typeof Number(false), Number(false));
console.log(typeof Number(null), Number(null));
console.log(typeof Number(undefined), Number(undefined));
