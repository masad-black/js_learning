// throw "my name";
// throw 4230;
// throw true;

// throw {
//   toString() {
//     return "I am batman";
//   },
// };

// try {
//   let val = [1, 2, 3];
//   //   and thing can be passed from throw fn
//   throw `this is invalid data!! ${val} ${9473974} ${true && false}`;
// } catch (error) {
//   console.error("catched error: ", error);
// }

// if exception occur the catch block will run first and then finally block will run
// but if the exception did not occur, then only the try and finally block will execute

// try {
//   console.log("every thing is running finee!!");
//   //   throw "new error!!!";
// } catch (error) {
//   console.error(`error: ${error}`);
// } finally {
//   console.log("hello this is final");
// }

// function f() {
//   try {
//     console.log(0);
//     // throw "bogus error";
//   } catch (e) {
//     console.log(1);
//     return `return from catch block ${e}`;
//     console.log(2); // not reachable
//   } finally {
//     console.log(3);
//     return "return from finally block"; // overwrites the previous "return"
//     console.log(4); // not reachable
//   }
//   // "return false" is executed now
//   console.log(5); // not reachable
// }

// console.log(f());

/*
    when using error, error has 2 properties name of the error and the message
    throw new Error("<some error message>")
    
    name: message

 */

// try {
//   throw new Error("this is the best error!!!");
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
// }
