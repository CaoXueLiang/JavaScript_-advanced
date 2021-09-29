/**
 * 寄生式继承，也是主要针对于对象
 * 结合了原型式继承和工厂模式
 */

var personObj = {
  running: function () {
    console.log("running");
  },
};

function createStudent(name) {
  var stu = Object.create(personObj);
  stu.name = name;
  stu.studying = function () {
    console.log("studying~");
  };
  return stu;
}

var stuObj = createStudent("why");
var stuObj1 = createStudent("kobe");
var stuObj2 = createStudent("james");
