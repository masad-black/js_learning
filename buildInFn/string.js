let str1 = "this is string 1";
let str2 = "this is string 2";
let str3 = `this is string 3`;
let str4 = new String("this is string 4");
let str5 = String("this is string 5");

// console.log(str1, str2, str3, str4, str5);

// console.table([
//   typeof str1,
//   typeof str2,
//   typeof str3,
//   typeof str4,
//   typeof str5,
// ]);

// we can't assin value in this form
// str1[1] = "%%%"

// ---------------------Methods---------------------

let s1 = "   I Am Batman Am   ... ";

console.log(`Original string: ${s1}`);

// this fn will give us the string at that index
console.log(s1.at(-6));

// this fn also return the strign from specified index
console.log(s1.charAt(5));

// this concat fn will combine the string defined in the arguments and return new string
console.log("Welcome".concat(" Muhammad ", "Asad", " Butt"));
console.log(s1.concat(" No i am ", "Batman"));

// this fn check wether string end with the user defined string, return true and false
console.log(s1.endsWith("Am", 4));

// this fn check in the whole string, if the user defined string exist in them or not. return true and false
console.log(s1.toLowerCase().includes("i"));

// this fn, return the index of the defined string.
console.log(s1.indexOf("I"));

// this fn will add extra content at the end of the string
console.log(s1.padEnd(s1.length + 10, "12"));

// this is the opposite of the upper fn, it append at the start of the lenght
console.log(s1.padStart(s1.length + 10, "%"));

// this fn will just append the same string, defined number of times
console.log(s1.repeat(10));

// this fn will replace the string with the defined string, and return the new string, and this will only replace the first matching
console.log(s1.replace("Am", "$$$$"));

// this is the same as replace, but it will replace all the matching not just the first one
console.log(s1.replaceAll("Am", "$$$"));

// this is used to get the substring from the string, and give the new string
console.log(s1.slice(-2, -1));

// this will split the string into a new array, on defined pattren
console.log(s1.split("I"));

// remove white space from string
console.log(s1.trim());
console.log(s1.trimEnd());
console.log(s1.trimStart());

console.log(`Original string: ${s1}`);

// conversion

let val = "";
console.log(typeof String(val), String(val));
