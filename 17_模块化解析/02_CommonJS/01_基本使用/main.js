// node 实现了commonJS可以直接使用，不能在浏览器中直接使用
const result = require("./xiaoming.js");

console.log(result.name);
console.log(result.age);
console.log(result.sum(10, 20));
