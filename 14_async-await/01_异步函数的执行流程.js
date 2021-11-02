// 异步函数的写法
// async function foo() {}

// const foo1 = async () => {};

// class Person {
//   async foo2() {}
// }

// `async`异步函数的执行顺序和普通函数相同

async function foo() {
  console.log("foo function start~");

  console.log("内部的代码执行1");
  console.log("内部的代码执行2");
  console.log("内部的代码执行3");

  console.log("foo function end~");
}

console.log("script start");
foo();
console.log("script end");
