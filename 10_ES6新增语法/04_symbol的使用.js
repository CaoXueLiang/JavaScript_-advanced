//symbol基本使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 == s2);

//symbol可以作为计算属性的key
const person = {
  [Symbol()]: "caoxueliang",
  [Symbol()]: 30,
};
console.log(person);
console.log(Object.keys(person));

//symbol.for的使用
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb);

//获取symbol的key
console.log(Symbol.keyFor(sa));
console.log(Symbol.keyFor(sb));
console.log(Symbol.keyFor(sa) === Symbol.keyFor(sb));

let teacher = {
  name: "kebi",
  age: 40,
  [Symbol()]: "aaa",
  [Symbol()]: "bbb",
};
console.log(teacher);
console.log(Object.getOwnPropertySymbols(teacher));
console.log(Object.keys(teacher));
console.log(Object.getOwnPropertyNames(teacher));
console.log(Reflect.ownKeys(teacher));
for (const key in teacher) {
  console.log("---", key);
}
