/**
 * 问题？
 * 如果需要对某一数据进行函数的调用，执行两个函数`fn1`和`fn2`,这两个函数是依次执行的。
 * 那么如果我们每次都对这两个函数进行调用，操作上就会显得重复
 *
 * 组合函数：将多个函数组合起来，依次调用，这个组合的过程称为组合函数
 */

function double(num) {
  return num * 2;
}
function suqare(num) {
  return num ** 2;
}
console.log(suqare(double(10)));

//组合后的函数
function compose(fn1, fn2) {
  return function (num) {
    return fn2(fn1(num));
  };
}
var composedFn = compose(double, suqare);
console.log(composedFn(10));
