/*
 
 js store primitive and non primitive datatype in two data structures (Stack and Heap)

 stack: for primitive datatypes, it give copy refrence
 heap: for non primitives datatypes, it give actula refrence of the data

 so, changes in heap are actually show in all the datatypes


*/
// Primitive
let name = "asad butt";
let age = 20;
let id = 37106012346503;

// console.log("org values");
// console.table([name, age, id]);

let cname = name;
let cage = age;
let cid = id;

cname = "changes";
cage = 100;
cid = 100000000000;

// console.log("modified values");
// console.table([cname, cage, cid]);

// console.log("org values");
// console.table([name, age, id]);

// Non primitive

let array = ["eren", "toji", "itachi", "saskue", "pain"];
let obj = {
  age: 20,
  uni: "comsats",
};

let cArr = array;
let cObj = obj;

// console.log("org array: ", array);
console.log("org obj: ", obj);

cArr[0] = "changed";
cArr[1] = "changed";

cObj.age = 1000;
cObj.uni = "Changed";

console.log("mod obj: ", cObj);
console.log("org obj: ", obj);
