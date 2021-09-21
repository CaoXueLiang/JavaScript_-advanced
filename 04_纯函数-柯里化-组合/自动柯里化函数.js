function curring(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  }
  return curried;
}

//测试自动柯里化函数
function foo(x, y, z) {
  return x + y + z;
}

var curriedFunction = curring(foo);
console.log(curriedFunction(10)(20)(30));
console.log(curriedFunction(10, 20)(30));
console.log(curriedFunction(10)(20, 30));
