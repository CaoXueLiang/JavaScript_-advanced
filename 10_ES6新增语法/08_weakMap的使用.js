const obj1 = { name: "kebi" };
const obj2 = { name: "xiaoming" };

let weakMap = new WeakMap();
// weakMap.set(1, obj1); //TypeError: Invalid value used as weak map key

/**
 * ① weakMap只能用对象作为key值
 * ② 对对象的引用是弱引用
 */
weakMap.set(obj1, "obj111");
console.log(weakMap);
