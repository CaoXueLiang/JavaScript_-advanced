function* foo() {
  const value1 = 100;
  const n = yield value1;

  const value2 = 200 * n;
  const result2 = yield value2;

  console.log(result2);

  const value3 = 300;
  yield value3;

  //   console.log("函数执行结束~");
}

const generator = foo();
console.log(generator.next());
// 第二段代码, 第二次调用next的时候执行的, 返回值是上一次yield的result
// const result2 = yield value2;
console.log(generator.next(2));
console.log(generator.next(5));
