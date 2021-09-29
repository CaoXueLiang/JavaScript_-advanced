function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.running = function () {
  console.log(this.name + " running~");
};

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends);
  this.sno = sno;
  this.score = score;
}

//设置子类的原型，并且接constructor指向子类
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  configurable: true,
  writable: true,
  enumerable: false,
});

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu1 = new Student("kebi", 20, ["james", "qiaodan"], 100500, 99);
var stu2 = new Student("xiaoming", 30, ["xiaohong", "lili"], 100510, 100);
console.log(stu1);
console.log(stu2);
stu1.eating();
stu2.eating();

//将设置prototype和重新设置constructor封装为一个函数
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype);
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType,
  });
}
