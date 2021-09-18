// new构造函数时，this指向构造函数创建出来的对象
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person("xiaoming", 20);
console.log(person1);

const person2 = new Person("lining", 30);
console.log(person2);
