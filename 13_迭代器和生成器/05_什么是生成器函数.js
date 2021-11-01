/**
 *  生成器函数也是一个函数，但是和普通的函数有一些区别：
 *  ①：生成器函数需要在function的后面加一个符号：*
 *  ②：生成器函数可以通过yield关键字来控制函数的执行流程
 *  ③ 生成器函数的返回值是一个Generator（生成器）
 *
 *   生成器是一种特殊的迭代器 (a special type of iterator, called a Generator)
 */

function* foo() {
  console.log("函数开始执行~");

  const value1 = 100;
  console.log("第一段代码:", value1);
  yield value1;

  const value2 = 200;
  console.log("第二段代码:", value2);
  yield value2;

  const value3 = 300;
  console.log("第三段代码:", value3);
  yield;

  console.log("函数执行结束~");
}

const fooIterator = foo();
console.log(fooIterator.next());
console.log(fooIterator.next());
console.log(fooIterator.next());
console.log(fooIterator.next());
console.log(fooIterator.next());
