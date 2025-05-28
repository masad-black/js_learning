let array = [
  "toji",
  "eren",
  "goku",
  "sasuke",
  "itachi",
  "pain",
  {
    address: "Hazro",
    city: "Attock",
    province: "Punjab",
  },
];
let arrObj = new Array("toji", "eren", "goku", "sasuke", "itachi", "pain", {
  address: "Hazro",
  city: "Attock",
  province: "Punjab",
});

let cpArr = arrObj;

// console.log(`original array: ${JSON.stringify(arrObj)}`);
// console.log(`cpArr: ${JSON.stringify(cpArr)}`);
// console.log();
// console.log();

// if we assign array to another variable, it will use the same refrence as the original one is
//  using and if changes are made in copy array it will be reflected in changes in the original one also

// array.length = 1;
// cpArr.length = 2;
// cpArr.length = 10;
// cpArr.length = 11;
// cpArr[11] = "something not added before";

// cpArr[cpArr.length - 1].address = "change in all places!!";
// cpArr[cpArr.length - 1]["province"] = "changed my province!!";

// console.log(cpArr[cpArr.length - 1].code);

function changearr(arr) {
  console.log("in array before: ", arr);
  arr.pop();
  console.log("in array after: ", arr);
}

// console.log(`modified array: array: ${JSON.stringify(arrObj)}`);
// console.log(`cpArr: ${JSON.stringify(cpArr)}`);

console.log(`--------------------Methods--------------------`);

let arr = Array.from("abcdef");
let arr2 = Array.from(1234567);
let arr3 = Array.from({ carName: "BWN", tyres: 4, engine: "V8" });

let newArr = Array.from(
  [1, 2, 3, 4, 5, 6],
  (num) => num + Math.round(Math.random() * 10 + 1)
);

let newArr2 = Array.from(array);

// console.log("org: ", array);
// console.log("new: ", newArr2);
// newArr2.pop();
// console.log("new mod: ", newArr2);
// console.log("org: ", array);

let lenArr = Array.from({ length: 20 }, (ind) => {
  console.log(`index: ${ind} `);
  return Math.random();
});

console.log(lenArr);

console.log("hel");
