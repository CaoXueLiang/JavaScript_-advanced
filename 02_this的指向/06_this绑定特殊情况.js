// 一、 在显示绑定中如果传入null,undefined，那么这个显示绑定会忽略。使用默认规则
function foo() {
  console.log(this);
}
var obj = {
  name: "why",
};
foo.call(obj);
foo.call(null);
foo.call(undefined);
var newFunction = foo.bind(null);
newFunction();
console.log("--------");

// 二、创建一个函数的间接引用，这种情况使用默认绑定规则
var num1 = 100;
var num2 = 0;
var result = (num2 = num1);
console.log(result);

var obj1 = {
  name: "obj1",
  foo: foo,
};

var obj2 = {
  name: "obj2",
};

obj1.foo();
(obj2.foo = obj1.foo)();
console.log("--------");

// 三、箭头函数不使用`this`的四种绑定规则（也就是不绑定this），而是根据外层作用域来决定this
var obj = {
  data: [],
  getData: function () {
    setTimeout(() => {
      // 模拟获取到的数据
      var res = ["abc", "cba", "nba"];
      this.data.push(...res);
      console.log(this);
    }, 1000);
  },
};

obj.getData();
