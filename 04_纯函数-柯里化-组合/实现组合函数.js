//实现组合函数
function compose(...fns) {
  let length = fns.length;
  //判断传进来的参数是否是函数类型
  for (let index = 0; index < length; index++) {
    const element = fns[index];
    if (typeof element !== "function") {
      throw TypeError("expected arguments are function");
    }
  }

  //没有传入函数要抛出异常
  if (length === 0) {
    throw TypeError("functions must moreThan one");
  }

  //返回组合后的函数
  return function (...args) {
    let index = 0;
    let result = fns[index].apply(this, args);
    while (++index < length) {
      result = fns[index].call(this, result);
    }
    return result;
  };
}

//测试组合函数的代码
function double(num) {
  return num * 2;
}
function suqare(num) {
  return num ** 2;
}

var composedFn = compose(double, suqare);
console.log(composedFn(20));

// var composedFn2 = compose(1, suqare);
// var composedFn2 = compose();
