const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(11111);
    reject(11111);
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
    // resolve(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(33333);
    reject(33333);
  }, 3000);
});

/**
 * Promsie.race (竞速)不管执行结果是fulfilled还是rejected，返回的都是第一个执行完的结果
 */

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });

/**
 * Promise.any 返回第一个fulfilled状态的promise。只有当数组中所有的promise的状态都是rejected才会走catch方法
 * 错误类型是AggregateError
 */

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res1: ", res);
  })
  .catch((err) => {
    console.log("err1: ", err.errors);
  });
