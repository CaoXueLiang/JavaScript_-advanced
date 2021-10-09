//在babel官网上，ES6转ES5 https://babeljs.io/repl

//---------------------------------- ES6的代码 -----------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(`${this.name} eating~`);
  }

  running() {
    console.log(`${this.name} running~`);
  }

  static randomPerson() {
    console.log(Math.random());
  }
}

//--------------------------------- Babel转换为ES5的代码 ----------------------------------
("use strict");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// /*#__PURE__*/ 表示这个函数时纯函数，没有副作用。如果这个函数没被使用，就会使用tree-shaking将其优化掉
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(
    Person,
    [
      {
        key: "eating",
        value: function eating() {
          console.log("".concat(this.name, " eating~"));
        },
      },
      {
        key: "running",
        value: function running() {
          console.log("".concat(this.name, " running~"));
        },
      },
    ],
    [
      {
        key: "randomPerson",
        value: function randomPerson() {
          console.log(Math.random());
        },
      },
    ]
  );

  return Person;
})();

let person1 = new Person("xiaoming", 20);
console.log(person1);
