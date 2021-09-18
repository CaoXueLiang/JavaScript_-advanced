var myName = "caoxuelaing";

console.log(num1);

var num1 = 20;
var num2 = 30;
var result = num1 + num2;

console.log(result);

console.log(window.window.window.window);

/**
  1. 代码被解析，v8引擎内部会帮我们创建一个对象 （globalObject -> go）
  2. 运行代码
    2.1 v8为了执行代码，v8引擎内部会有一个执行上下文栈（Execution Context Stack, ECStack）(函数调用栈)
    2.2 因为我们执行的是全局代码，为了全局代码能够正常执行，需要创建 全局执行上下文（Global Execution Context）(全局代码需要被执行时才会创建)
*/

var globalObject = {
  String: "string类",
  Array: "array类",
  Date: "Date类",
  setTimeout: "settimeout",
  myName: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined,
};
