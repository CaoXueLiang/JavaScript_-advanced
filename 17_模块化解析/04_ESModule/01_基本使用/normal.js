// 1、导出方式一
// export const name = "xiaoming";
// export const age = 22;
// export function sumMethod(num1, num2) {
//   return num1 + num2;
// }

// 2、导出方式二
// const name = "xiaoming";
// const age = 22;
// function sumMethod(num1, num2) {
//   return num1 + num2;
// }
// export { name, age, sumMethod };

// 3、导出方式三，默认导出
// const name = "xiaoming";
// const age = 22;
// function sumMethod(num1, num2) {
//   return num1 + num2;
// }
// export default { name, age, sumMethod };

// 4、导出方式四，export和export default 结合使用
// export const name = "xiaoming";
// export const age = 22;
// export default function sumMethod(num1, num2) {
//   return num1 + num2;
// }

// 5、导出方式五，起别名 (下面这种方式等同于方式四)
const name = "xiaoming";
const age = 22;
function sumMethod(num1, num2) {
  return num1 + num2;
}
export { name, age, sumMethod as default };
