// 1、传入的是普通值
const promise1 = Promise.resolve("kebi");
//等价于
new Promise((resolve) => {
  resolve("kebi");
});

// 2、传入的是一个新promise
const newPromsie = new Promise((resolve, reject) => {
  resolve("new promise");
});
Promise.resolve(newPromsie); //等价于 newPromsie

// 3、传入的是一个实现了then方法的对象,会执行对象的then方法
const obj = {
  then: function (resolve, reject) {
    resolve("new object");
  },
};

Promise.resolve(obj);
