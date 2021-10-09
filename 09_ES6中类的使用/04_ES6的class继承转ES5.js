//--------------------------------------- ES6的继承 -------------------------------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eating() {
//     console.log(`${this.name} eating~`);
//   }

//   running() {
//     console.log(`${this.name} running~`);
//   }

//   static randomPerson() {
//     console.log(Math.random());
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject;
//   }

//   teaching() {
//     console.log(`${this.name}教的科目是${this.subject}`);
//   }
// }

//------------------------------------ ES6的继承通过babel转化为ES5的代码 ---------------------------------
("use strict");

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

/**
 * 实现继承关系，寄生组合式继承实现方式
 * @param {*} subClass
 * @param {*} superClass
 */
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

//设置隐式原型`__proto__`
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

// 是否是原生的映射构造函数
function _isNativeReflectConstruct() {
  console.log(Reflect);
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

//检查是否是通过`new`调用，如果只是作为普通函数调用则抛出错误
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

var Teacher = /*#__PURE__*/ (function (_Person) {
  _inherits(Teacher, _Person);

  var _super = _createSuper(Teacher);

  function Teacher(name, age, subject) {
    var _this;

    _classCallCheck(this, Teacher);

    _this = _super.call(this, name, age);
    _this.subject = subject;
    return _this;
  }

  _createClass(Teacher, [
    {
      key: "teaching",
      value: function teaching() {
        console.log(
          ""
            .concat(this.name, "\u6559\u7684\u79D1\u76EE\u662F")
            .concat(this.subject)
        );
      },
    },
  ]);

  return Teacher;
})(Person);

let teacher1 = new Teacher("lining", 30, "语文");
console.log(teacher1);
Person.randomPerson();
Teacher.randomPerson();
Teacher.randomPerson();
