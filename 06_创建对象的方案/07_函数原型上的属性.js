function foo() {}

console.log(Object.getOwnPropertyDescriptors(foo.prototype));

/**
 * constructor属性:不可枚举，并且value值指向这个函数
 */
console.log(foo.prototype.constructor === foo); //true

// Object.defineProperty(foo.prototype, "constructor", {
//   value: "哈哈哈",
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });
// console.log(foo.prototype);

//获取函数的名称
console.log(foo.name);
console.log(foo.prototype.constructor.name);

//可以在显示原型上添加属性和方法
foo.prototype.name = "kebi";
foo.prototype.age = 20;
foo.prototype.eating = function () {
  console.log(`${this.name} 在吃饭`);
};

console.log(foo.prototype);
