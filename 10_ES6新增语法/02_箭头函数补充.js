const foo = (name) => {
  //   console.log(arguments);
  console.log(`我是箭头函数 ${name}`);
};

foo("kebi");

/**
 * 箭头函数与普通函数的区别:
 * ① 没有显式原型属性 prototype
 * ② 不能调用new创建实例
 * ③ 不绑定this
 * ④ 没有arguments参数，arguments is not defined
 */
console.log(foo.prototype);
new foo();
