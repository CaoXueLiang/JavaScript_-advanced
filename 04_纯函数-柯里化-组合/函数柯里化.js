/**
 * 函数科里化的定义？
 * 维基百科的定义: 是把接受多个参数的函数，变成接受一个单一参数的函数，并且返回接受余下的参数，而且返回结果的新函数。
 * 自己的理解：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数，这个过程就称为柯里化。
 */

//1. 柯里化的表现
function add(x, y, z) {
  return x + y + z;
}
console.log(add(10, 20, 30));

function add2(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
console.log(add2(10)(20)(30));

var add3 = (x) => (y) => (z) => x + y + z;
console.log(add3(10)(20)(30));

/**
 * 2. 柯里化的好处
 * ① 让函数的职责单一，将一个函数处理的问题尽可能单一
 * ② 柯里化的复用，可以让我们复用参数逻辑
 */

function makeAdder(num) {
  return function (count) {
    return num + count;
  };
}

var makeAdder5 = makeAdder(5);
console.log(makeAdder5(10));
console.log(makeAdder5(20));

var makeAdder10 = makeAdder(10);
console.log(makeAdder10(10));
console.log(makeAdder10(20));

// 3. 打印日志柯里化的实例
//原打印日志函数
function printLog(date, type, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`
  );
}
printLog(new Date(), "error", "运行错误");

//进行柯里化之后的函数
var printLogCrurring = (date) => (type) => (message) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`
  );
};
var printToday = printLogCrurring(new Date());
printToday("error")("日志1");
printToday("waring")("日志2");

var printTodayAndWarning = printLogCrurring(new Date())("waring");
printTodayAndWarning("我是错误一。。。");
printTodayAndWarning("我是错误二。。。");
