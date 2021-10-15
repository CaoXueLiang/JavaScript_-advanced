/**
 *  add 添加元素
 *  delete 删除元素
 *  has 判断是否包含某个元素
 *  clear 清空所有的元素
 */

//创建set，set基本使用
let tmpSet = new Set();
tmpSet.add(10);
tmpSet.add(20);
tmpSet.add(20);
tmpSet.add(30);
console.log(tmpSet);

tmpSet.add({});
tmpSet.add({});
console.log(tmpSet);

const obj = { name: "kebi", age: 20 };
tmpSet.add(obj);
tmpSet.add(obj);
console.log(obj);

// 数组去重
let tmparray = [10, 20, 30, 30, 50, 50];
console.log([...new Set(tmparray)]);
console.log(Array.from(new Set(tmparray)));

// set的一些方法
let set1 = new Set([10, 20, 30, 50, 100]);
console.log(set1);
console.log(Object.prototype.toString.call(set1));

console.log(set1.has(100)); //判断set中是否有某个元素

set1.delete(50);
set1.delete(100);
console.log(set1);

for (const item of set1) {
  console.log(item);
}

set1.clear(); //清空set中的所有数据
console.log(set1);
