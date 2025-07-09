// ver01
/*
const moduleData = require("./math");


console.log(moduleData.add(1, 2)); // 3
console.log(moduleData.sub(1,2)); // -1
*/

// ver02
/*
const { add, sub } = require("./math");


console.log(add(1, 2)); // 3
console.log(sub(1,2)); // -1
*/



// esmodule
// import mul from "./math.js";
// import { add, sub } from "./math.js"; 
// -> 확장자를 꼭 써주어야함!!

import mul, { add, sub } from "./math.js";

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(mul(1, 2)); // 2    