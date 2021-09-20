//一、bind的基本使用
var obj = {
  name: "xiaoming",
  age: 18,
};

function foo() {
  console.log(this, ...arguments);
  let tmpArray = Array.from(arguments);
  return tmpArray.reduce((pre, current) => {
    return pre + current;
  }, 0);
}

foo();
let result = foo.bind(obj, 10, 20);
console.log(result(30, 40));
console.log("-----------------------");

//二、手写bind函数
Function.prototype.cxlBind = function (thisArg, ...argArray) {
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = this;
  return function (...argArray2) {
    //将两个参数进行合并，然后进行函数调用
    let result = thisArg.fn(...[...argArray, ...argArray2]);
    delete thisArg.fn;
    return result;
  };
};

let bindFn = foo.cxlBind(obj, 10, 20);
console.log(bindFn(40));
