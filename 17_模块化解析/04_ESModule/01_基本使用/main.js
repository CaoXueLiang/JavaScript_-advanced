// import { name, age, sumMethod } from "./normal.js";
// console.log(name, age, sumMethod(10, 20));

import normalModule from "./normal.js";
import { name as myName, age } from "./normal.js";
import * as totalModule from "./normal.js"; //* 代表导出所有
console.log(normalModule);
console.log(myName, age);
console.log(totalModule);
