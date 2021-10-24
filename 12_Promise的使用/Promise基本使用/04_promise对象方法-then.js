//1、同一个promise可以多次调用then方法
// 当resolve方法被调用时，所有then方法传入的回调函数都会被调用
const promise = new Promise((resolve, reject) => {
  resolve("hahaha");
});

promise.then((res) => {
  console.log("res1: ", res);
});

promise.then((res) => {
  console.log("res2: ", res);
});

promise.then((res) => {
  console.log("res3: ", res);
});

//2、then方法本身也是有返回值的，返回值也是一个promise
// then方法传入的回调函数，也可以有返回值（①：普通对象 ②：新的promise ③：实现了then方法的对象）
const newPromise = new Promise((resolve, reject) => {
  resolve("new promise");
});

promise
  .then((res) => {
    console.log("res111:", res);
  })
  .then((res) => {
    console.log("res2222:", res);
    return "cao xue laing ";
  })
  .then((res) => {
    console.log("res333:", res);
    return newPromise;
  })
  .then((res) => {
    console.log("res444:", res);
    return {
      then: function (resolve, reject) {
        reject(new Error("then errow"));
      },
    };
  })
  .then((res) => {
    console.log("res555:", res);
  })
  .catch((err) => {
    console.log("error_1: ", err);
  });
