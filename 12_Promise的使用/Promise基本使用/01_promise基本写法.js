/**
 * 当通过new创建promise对象的时候，我们需要传入一个回调函数，这个函数称为executor
 * 1、这个回调函数会立即执行，并且传入另外两个回调函数，resolve，reject
 * 2、当我们调用resolve函数时，会执行Promise对象的then方法传入的回调函数
 * 3、当我们调用reject函数时，会执行Promise对象的catch方法传入的回调函数
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolve message");
    reject("error message");
  }, 2000);
});

promise1.then(
  (res) => {
    console.log("res: ", res);
  },
  (err) => {
    console.log("error: ", err);
  }
);

promise1.then(
  (res) => {
    console.log("res2: ", res);
  },
  (err) => {
    console.log("error2: ", err);
  }
);

promise1.catch((error) => {
  console.log("catch error:", error);
});

/**
 * 从以上可以看出： 同一个promise可以多次调用then方法
 * ⚠️注意：promise1.then((res) => {}); 如果then方法后不写catch捕获，当状态是rejected时会报错 `UnhandledPromiseRejectionWarning: error messag`
 *  推荐使用下面这种书写方式，将catch放到最后，方便阅读
 */

promise1
  .then((res) => {
    console.log("res5:", res);
  })
  .catch((err) => {
    console.log("error5:", err);
  });
