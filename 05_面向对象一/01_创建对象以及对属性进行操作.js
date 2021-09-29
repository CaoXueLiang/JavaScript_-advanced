/**
 * 创建对象的方式有：
 * ① 通过new Object()创建
 * ② 通过字面量语法创建
 */
var obj = new Object();
obj.name = "xiaoming";
obj.age = 18;

var obj1 = { name: "xiaohua", age: 20 };

console.log(obj);
console.log(obj1);

/**
 * 对对象的属性进行操作
 * ① 获取属性
 * ② 删除属性
 * ③ 遍历属性 (for in, Object.keys(), Reflect.ownKeys())
 */

console.log(obj.name);
obj.name = "kebi";
console.log(obj.name);

delete obj.name;
console.log(obj);

console.log(Object.keys(obj1));
for (const key in obj1) {
  console.log(key);
}

console.log(Reflect.ownKeys(obj1));
