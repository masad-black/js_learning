/*
    when using break with lable, it will break only the closet loop
    but if break is used with lable, it will break that whole thing

 */

//   console.log("loop: ", i);
//   if (i === 6) {
//     console.log("inside: ", i);
//     break;
//   }
// }

let car = {
  name: "BWN",
  engin: "V8",
  tyers: 4,
  bumper: true,
  quality: "very well mentained",
  byerDetails: {
    name: "Asad",
    age: 20,
    address: "Hazro, Attock",
  },
  colors: ["Blue", "Red", "Sky Line"],
};

let array = ["hello", "hello2", "hello3", "hello4"];

// for (let field in car) {
//   if (field === "colors") {
//     console.log(car[field]);
//   }
// }

// for (let index in array) {
//   console.log(array[index]);
// }

for (const item of array) {
  console.log(item);
}
