/**
 * 当时异步函数时，抛出异常，后面的代码还会执行
 * 当时普通函数时，抛出异常时，后面的代码不会执行了
 */

async function foo() {
  console.log("foo function start~");

  console.log("中间代码~");

  // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
  throw new Error("error message");

  console.log("foo function end~");
}

foo().catch((err) => {
  console.log("err1: ", err);
});

console.log("后面的代码");
