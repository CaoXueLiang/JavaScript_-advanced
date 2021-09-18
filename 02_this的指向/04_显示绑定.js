function foo() {
  console.log("函数被调用了", this);
}
// foo();

//案例一
var obj = {
  name: "obj",
};

foo.call(obj);
foo.apply(obj);
foo.apply("aaaa");

// 2.call和apply区别
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this);
}

sum.call("call", 20, 30, 40);
sum.apply("apply", [20, 30, 40]);

//3.bind绑定
var obj1 = {
  name: "obj1",
  age: 20,
};
var newFoo = foo.bind(obj1);
newFoo();
newFoo();
