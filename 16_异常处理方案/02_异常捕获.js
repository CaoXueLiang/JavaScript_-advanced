/**
 * 1. 如果异常不处理，错误信息会随着调用栈一层一层的向上抛出。直到最顶层的调用
 * // 如果在最顶层没有对这个错误进行处理，那么程序就会终止并且报错
 * 2. 使用try catch进行异常捕获
 *
 */
function foo(type) {
  console.trace("call stack");
  console.dir(foo);
  if (type == 0 || type == 1) {
    throw new TypeError("type error");
  }
  console.log("foo结束执行");
}

function bar() {
  foo(0);
}

function test() {
  bar();
}

function demo() {
  test();
}

try {
  demo();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally");
}

console.log("后续的代码");
