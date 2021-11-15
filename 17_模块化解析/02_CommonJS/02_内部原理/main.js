const why = require("./cxl.js");

console.log(why);

setTimeout(() => {
  // console.log(why.name)
  // 在外层改变值。原文件也会被修改
  why.name = "james";
}, 1000);
