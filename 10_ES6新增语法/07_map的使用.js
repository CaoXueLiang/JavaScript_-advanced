/**
 * map 和 普通对象的区别：
 * map可以用对象作为key值
 */

const obj1 = { name: "kebi" };
const obj2 = { name: "xiaoming" };

let tmpObj = {
  [obj1]: 10,
  [obj2]: 20,
};
console.log(tmpObj);

let map = new Map();
map.set(obj1, "kebi");
map.set(obj2, "xiaoming");
console.log(map);

const map2 = new Map([
  [obj1, "kebi"],
  [obj2, "xiaoming"],
  [2, "lining"],
]);
console.log(map2);

console.log(map2.has(obj2));
console.log(map2.has(10));
console.log("----------------------");

// size, delete, get
console.log(map2.size);
// console.log(map2.delete(obj2));
console.log(map2.size);
console.log(map2.get(obj1));

//遍历map
map2.forEach((item, key) => {
  console.log(key, item);
});

console.log("------------------------");
for (const item of map2) {
  console.log(item);
}

console.log("------------------------");
for (const [key, value] of map2) {
  console.log(key, value);
}
