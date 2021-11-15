const name = "why";
const age = 18;
function sum(num1, num2) {
  return num1 + num2;
}

// 如果不进行任何导出，默认导出的是空对象：{}
// module.exports = {}
// exoprts = module.exports

// 导出方式一
// module.exports = {
//   name,
//   age,
//   sum,
// };

// 导出方式二
exports.myName = name;
exports.myAge = age;
exports.mySum = sum;

//最终导出的是 `moudule.exports`
