//一、函数设置默认参数
function foo(name = "kebi", age = 20) {
  console.log(name, age);
}

foo();
foo("xiaoming", 40);
foo("lining");
foo("lining", undefined);
foo("lining", null);
console.log("---------------");

//二、对象解构和默认值同时使用
function foo1({ name, age } = { name: "xiaoming", age: 30 }) {
  console.log(name, age);
}

foo1();
foo1({});

function foo2({ name = "kebi", age = 30 } = {}) {
  console.log(name, age);
}
foo2();
foo2({});
foo2({ name: "james" });
console.log("-----------------s");

//三、有默认值的参数最好放到最后
function foo3(x = 1, y, z) {
  console.log(x, y, z);
}
foo3();

//四、有默认值的函数函数参数的length
function foo3(x, y, z = 1, m, n) {}
console.log(foo3.length);

//五、函数的剩余参数
function foo4(x, y, z, ...args) {
  console.log(x, y, z, args);
}
foo4(10, 20, 30, 40, 50, 60);

// Rest parameter must be last formal parameter
// 剩余参数必须是最后一个实参
// function foo5(...args,x,y){
//     console.log(args,x,y)
// }
