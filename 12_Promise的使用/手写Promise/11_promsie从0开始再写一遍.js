const PROMISE_STATUS_PENDING = 'pending';
const PROMSIE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

class CXLPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (res) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status === PROMISE_STATUS_PENDING) {
            this.status = PROMSIE_STATUS_FULFILLED;
            this.value = res;
            this.onFulfilledFns.forEach((fn) => {
              fn(this.value);
            });
          }
        });
      }
    };
    const reject = (err) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status === PROMISE_STATUS_PENDING) {
            this.status = PROMISE_STATUS_REJECTED;
            this.value = err;
            this.onRejectedFns.forEach((fn) => {
              fn(this.value);
            });
          }
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled, onrejected) {
    const normalRejected = (err) => {
      throw err;
    };
    const normalFulfilled = (value) => {
      return value;
    };
    onrejected = onrejected || normalRejected;
    onfulfilled = onfulfilled || normalFulfilled;

    return new CXLPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          try {
            const result = onfulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedFns.push(() => {
          try {
            const result = onrejected(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
      //如果执行promise时，状态已经确定则直接返回执行结果
      if (this.status === PROMSIE_STATUS_FULFILLED) {
        try {
          const result = onfulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        try {
          const result = onrejected(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  catch(rejected) {
    return this.then(undefined, rejected);
  }

  finally(onfinally) {
    this.then(onfinally, onfinally);
  }

  static resolve(paragram) {
    return new CXLPromise((resolve) => {
      resolve(paragram);
    });
  }

  static reject(paragram) {
    return new CXLPromise((resolve, reject) => {
      reject(paragram);
    });
  }

  static all(promiseArray) {
    return new CXLPromise((resolve, reject) => {
      let promiseMap = new Map();
      promiseArray.forEach((element) => {
        element
          .then((res) => {
            promiseMap.set(element, res);
            if (promiseMap.size === promiseArray.length) {
              let values = promiseArray.map((singlePromise) => {
                return promiseMap.get(singlePromise);
              });
              resolve(values);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  static allSettled(promiseArray) {
    return new CXLPromise((resolve) => {
      let promiseMap = new Map();
      promiseArray.forEach((element) => {
        element
          .then((res) => {
            promiseMap.set(element, { status: 'fulfilled', value: res });
          })
          .catch((err) => {
            promiseMap.set(element, { status: 'rejected', reason: err });
          })
          .finally(() => {
            if (promiseMap.size === promiseArray.length) {
              let values = promiseArray.map((singlePromise) => {
                return promiseMap.get(singlePromise);
              });
              resolve(values);
            }
          });
      });
    });
  }

  static race(promiseArray) {
    return new CXLPromise((resolve, reject) => {
      promiseArray.forEach((element) => {
        element
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  static any(promiseArray) {
    //AggregateError
    return new CXLPromise((resolve, reject) => {
      let promiseMap = new Map();
      promiseArray.forEach((singlePromise) => {
        singlePromise
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            promiseMap.set(singlePromise, err);
            if (promiseMap.size === promiseArray.length) {
              let values = promiseArray.map((element) => {
                return promiseMap.get(element);
              });
              reject(new AggregateError(values));
            }
          });
      });
    });
  }
}

// const promise1 = new CXLPromise((resolve, reject) => {
//   // resolve('sucess message');
//   reject('我是错误信息');
// });

/**
 * promise1.then((res) => {console.log('res:', res);})
 * 这个的返回值也是一个promise ----- 等价于下面
 * new CXLPromise((resolve, reject) => {reject('我是错误信息')});
 *
 */

// promise1
//   .then((res) => {
//     console.log('res:', res);
//   })
//   .catch((err) => {
//     console.log('catchError:', err);
//   });

//上面的表达式等价于下面这个 ======>
// const promise2 = new CXLPromise((resolve, reject) => {
//   reject('我是错误信息');
// });
// promise2.catch((err) => {});

// promise2.then(undefined, (err) => {});

// ----------------------------------------------------------------
const promise1 = new CXLPromise((resolve, reject) => {
  reject('我是错误信息');
});

promise1
  .then((res) => {
    console.log('res:', res);
  })
  .catch((err) => {
    console.log('catchError:', err);
  })
  .finally(() => {
    console.log('----执行完成了---');
  });

// // //分析过程:
// promise1.then((res) => {
//   console.log('res:', res);
// });
// //的执行结果返回一个新的promise
// const promiseStep1 = new CXLPromise((resolve, reject) => {
//   reject('我是错误信息');
// });
// //接着promiseStep1执行catch,简化为
// promiseStep1
//   .catch((err) => {
//     console.log('catchError:', err);
//   })
//   .finally(() => {
//     console.log('----执行完成了---');
//   });
