/**
 * 通过字面量的方法创建对象
 * 如果创建多个对象，会写很多重复的代码
 */

var person1 = {
  name: "xiaoming",
  age: 20,
  eating() {
    console.log(`${this.name} 在吃东西~`);
  },
  running() {
    console.log(`${this.name} 在跑步`);
  },
};

var person2 = {
  name: "kebi",
  age: 30,
  eating() {
    console.log(`${this.name} 在吃东西~`);
  },
  running() {
    console.log(`${this.name} 在跑步`);
  },
};

var person3 = {
  name: "lining",
  age: 50,
  eating() {
    console.log(`${this.name} 在吃东西~`);
  },
  running() {
    console.log(`${this.name} 在跑步`);
  },
};
