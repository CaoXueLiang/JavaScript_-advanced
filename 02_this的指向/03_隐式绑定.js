var name = "window";

function foo() {
  console.log(this);
}

// 1.案例一:
// var obj = {
//   name: "why",
//   foo: foo,
// };

// obj.foo();

// 2.案例二:
// var obj = {
//   name: "小明",
//   eating: function () {
//     console.log(this.name + "在吃东西");
//   },
//   running: function () {
//     console.log(this.name + "在跑步");
//   },
// };

// obj.eating();
// obj.running();

// var fn = obj.eating;
// fn();

// 3.案例三:
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar();
