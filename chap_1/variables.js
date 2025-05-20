/*

#!/usr/bin/env node: this called a hashbang comment, which is use only at the top of the file, to tell the node to this specific interpreter for
executing this file

*/

/* 
-> js has 3 types of variables

1) var
2) let 
3) const

let age;
var name;
by doing this the initilizer will automatically give then a undefined

const city = some value
but in {const} case the initilizer is must

-> js has scops concept and js supprt some types of scopes

1) global scope
2) local scope
3) function scope
4) module scope

let and const: are scope variables and,
var is not a scope variable, it can be used globally

*/

var fullName;
let age;
const city = "something";
// console.log(fullName, age, city);

if (false) {
  var x = 5;
}

// console.log(some);
// var some;

// console.log(some1);
// let some1;

// this is called re-assignment to the valiable, but const allow mutation of values
// const val = "some";
// console.log("original: ", val);
// val + "two";
// console.log("modified: ", val);

// console.log(name1, name2, name3);

let name1 = "asad";
const name3 = "ahmed";
{
  var name2 = "haider";
}

{
  console.log("-> top level");
  let parent1 = "parent1";
  let parent2 = "parent2";
  console.log(parent1, parent2);
  // console.log(child1, child2);

  {
    console.log("-> second level");
    let child1 = "child1";
    let child2 = "child2";
    console.log(parent1, parent2);
    console.log(child1, child2);

    {
      console.log("-> third leverl");
      let gChild1 = "grand child1";
      console.log(parent1, parent2);
      console.log(child1, child2);
      console.log(gChild1);
    }

    // console.log(gChild1);
  }
}
