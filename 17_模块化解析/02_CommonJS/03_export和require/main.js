//1.直接require node核心模块
const mainpath = require("path");
console.log(mainpath);

//2. 情况二: 以"./"，"../"，"/"开头
const moduleResult = require("./abc");
console.log(moduleResult);

const normalModule = require("./normal");
console.log(normalModule);

//3. 情况三：没有路径，也不是node的核心模块
const Axios = require("axios");
console.log(Axios);

//情况三查找路径
// console.log(module.paths);
