/**
 * weakSet 和 set的区别：
 * ① weakSet 中只能存放对象类型的数据 ,否则会报错 (TypeError: Invalid value used in weak set)
 * ② 对对象是一个弱引用
 * ③ weakSet 不能遍历
 */

let weakset = new WeakSet();
// weakset.add(10);

const obj = {
  name: "kebi",
  age: 40,
};

weakset.add(obj);
console.log(weakset);

console.log(weakset.has(obj));
