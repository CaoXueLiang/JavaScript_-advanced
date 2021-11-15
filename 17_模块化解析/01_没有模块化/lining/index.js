//使用自执行函数，将变量控制在函数的作用域中

const moduleA = (function () {
  var name = "lining";
  var age = "30";
  function sum(num1, num2) {
    return num1 + num2;
  }

  return {
    name,
    age,
    sum,
  };
})();
