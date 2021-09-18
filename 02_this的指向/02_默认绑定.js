// console.log(this); //window

//案例一
// function foo() {
//   console.log(this);
// }
// foo();

// //案二
// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1();
// }

// function foo3() {
//   console.log(this);
//   foo2();
// }

// foo3();

// //案例三
// var obj = {
//   name: "obj",
//   foo: function () {
//     console.log(this);
//   },
// };

// var bar = obj.foo;
// bar();

// //案例四
// function foo5() {
//   console.log(this);
// }
// var obj1 = {
//   name: "why",
//   foo: foo5,
// };

// var bar1 = obj1.foo;
// bar1(); // window

//案例五
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}

var fn = foo();
fn();
