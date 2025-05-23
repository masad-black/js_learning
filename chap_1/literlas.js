/**
 js have multipul literals 
    
 [] for array
 {} for object
 `${}` for string
 
 */

let gArray = ["eren", "toji", "itachi", "saskue", , "pain", ,];

// function call() {
//   let lArray = [1, 2, 4];
//   return lArray;
// }

// let fCall = call();
// let sCall = call();

// if (fCall === sCall) {
//   console.log("same");
// }

// if (gArray === gArray) {
//   console.log("smae too");
// }

function getCarName() {
  return "Supra mk4";
}

let obj = {
  carName: "supra",
  getCar: getCarName(),
  "   ": "something",
  "!": "none",
};

console.log("Obj type: ", typeof obj);
console.log("fn type: ", typeof getCarName);
console.log("array type: ", typeof gArray);
