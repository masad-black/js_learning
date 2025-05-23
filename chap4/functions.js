// this number is call parameter
// there is also another fn types, IIFE (immidietly invoked fn expression)
function squar(number) {
  console.log(number);
  number = 10;
  return { ans: number * number, number };
}

// the this value passing is called argument
// console.log(squar(2));

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

function changeValues(obj) {
  //   obj.name = "something changed";
  array[1] = "something changed";
}

// console.log("org value before fn: ", array);

changeValues(array);

// console.log("mod value after fn: ", array);

function fnInsideFn(val) {
  function printSome(someVal) {
    console.log(someVal);
  }

  printSome(val);
  printSome(val);
  printSome(val);
}

function myFn() {
  console.log("hello");
}

const newFn = function hello() {
  console.log("new fn");
};

const createPet = function (petName) {
  const newPet = {
    name: petName,
    getPetName: function () {
      return this.name;
    },
    setNewName: function (newName) {
      this.name = newName;
    },
  };
  return newPet;
};

const myPet = createPet("Leo");
// console.log(myPet);
// console.log(myPet.getPetName());

myPet.setNewName("snowy");

// console.log(myPet.getPetName());

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

// const ans = outside()(10);
// console.log(ans);

function checkingArg() {
  console.log(typeof arguments);
}

// checkingArg(1, 2, 3, 4, true, false, "Hello world");

// fn has 2 types of parameter

// defaul parameters, these are defualt parameter if no value are pass to the fn
function defaultParam(a = 10, b = 1) {}

// and the second one is rest paraeter
function restParam(num, ...allOtherParam) {
  console.log(num, allOtherParam);
}

// restParam(2, 8, 9, 0, 0, 0);

const newFN = () => {
  console.log("Hello", this);
};
// newFN(1, 2, 3, 4, true, false, "hello");
