function foo() {
  //   console.log("我是foo函数");
}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log("进行了apply调用");
    return target.apply(thisArg, argArray);
  },

  construct(target, argArray) {
    console.log("进行了new调用");
    return new target(...argArray);
  },
});

fooProxy.apply(this, ["xiaoming", "lining"]);
new fooProxy();
