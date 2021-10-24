/**
 * resolve(参数)中的参数类型：
 * 1、普通值或对象，那么这个值会作为then回调的参数
 * 2、传入的是一个新promise，那么当前promise的状态由传入的promise决定，相当于状态进行了移交
 * 3、传入一个对象，并且这个对象实现了then方法，那么会执行该对象的then方法，并根据then方法的结果来决定promise的状态
 */

//一、传入普通值或者对象
const promise1 = new Promise((resolve, reject) => {
  resolve("1111111");
});

promise1.then((res) => {
  console.log("res: ", res);
});

//二、传入的是一个新promise
const newPromsie = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("new promise");
    reject("error message");
  }, 1000);
});

new Promise((resolve, reject) => {
  resolve(newPromsie);
})
  .then((res) => {
    console.log("res1: ", res);
  })
  .catch((err) => {
    console.log("err1: ", err);
  });

//三、传入实现then方法的对象
const obj = {
  then: function (resolve, reject) {
    // resolve("obj then message");
    reject(new Error("error"));
  },
};

new Promise((resolve, reject) => {
  resolve(obj);
})
  .then((res) => {
    console.log("res2: ", res);
  })
  .catch((err) => {
    console.log("err2: ", err);
  });
