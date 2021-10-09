function Person() {}

function Student() {}

function Teacher() {}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false,
  configurable: true,
  writable: true,
});

var stu1 = new Student();
console.log(stu1 instanceof Student);
console.log(stu1 instanceof Person);
console.log(stu1 instanceof Object);

// 手写instanceOf, 原理是判断，right是否在left的原型链上
function myInstance(left, right) {
  let currentProto = Object.getPrototypeOf(left);
  let rightProto = right.prototype;
  while (currentProto !== null) {
    if (rightProto === currentProto) {
      return true;
    }
    currentProto = Object.getPrototypeOf(currentProto);
  }
  return false;
}

console.log(stu1);
console.log(myInstance(stu1, Student));
console.log(myInstance(stu1, Person));
console.log(myInstance(stu1, Object));
console.log(myInstance(stu1, Teacher));
