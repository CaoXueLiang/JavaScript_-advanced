//一、apply的基本使用
var name = "window";
var age = 100;

var obj = {
  name: "xiaoming",
  age: 18,
};

function foo() {
  console.log(this, ...arguments);
}

foo.apply(null);
foo.apply(undefined);
foo.apply(obj);
foo.apply(obj, [100, 200, 300]);
foo.apply(123);
console.log("-----------------------");

//二、手写apply函数
Function.prototype.cxlApply = function (thisArg, argArray) {
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = this;
  let result = thisArg.fn(...(argArray || []));
  delete thisArg.fn;
  return result;
};

foo.cxlApply(null);
foo.cxlApply(undefined);
foo.cxlApply(obj);
foo.cxlApply(obj, [100, 200, 300]);
foo.cxlApply(123);
