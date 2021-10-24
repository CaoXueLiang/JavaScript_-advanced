const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(22222);
    resolve(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

/**
 * Promise.all 只要有一个状态变为rejected，就会走catch方法
 * 当数组中所有的promise的状态都是fulfilled时，才会走成功回调,并且以数组的形式返回结果
 */

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });

/**
 * Promise.allSettled
 * 不管数组中的promise的状态是fulfilled还是rejected，都会等待所有promise执行完毕，将执行结果以数组的方式返回，包含status和value
 * Promsie.allSettled没有catch回调
 */
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log("res: ", res);
});
