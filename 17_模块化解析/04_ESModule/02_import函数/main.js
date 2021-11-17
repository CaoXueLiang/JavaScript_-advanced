//引入方式一
//① 这种方式是同步的
//② 只能放在最外层，不能放在判断语句中
//③ import会进行函数提升

// console.log(name);
// import { name, age, foo } from "./abc.js";
// console.log("----后续代码----");

//引入方式二，import()函数
//① 这种方式是异步的
//② 返回值是Promise
//③ 可以放在表达式中

if (true) {
  const result = import("./abc.js");
  result.then(({ name, age, foo }) => {
    console.log(name, age, foo);
  });
}

console.log("----后续代码----");
