//数组展开,也支持字符串展开
let array = ["xiaoming", "kebi", "honghong", "james"];
let nameArray = ["nining"];
const myName = "caoxueliang";

console.log(...array);
console.log(...myName);
console.log([...array, ...nameArray]);

//对象展开
let perosn = {
  name: "caoxueliang",
  age: 20,
  height: 1.88,
};
console.log({ ...perosn, fringds: ["ming", "ning"] });

//注意：...展开运算符是浅拷贝
