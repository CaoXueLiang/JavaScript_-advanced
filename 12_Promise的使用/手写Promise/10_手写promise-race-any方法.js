const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

/** 工具类函数，捕获异常 */
function execFunctionWithCatchError(exefn, value, resolve, reject) {
  try {
    //考虑返回值的类型
    const result = exefn(value);
    //考虑then回调函数的返回值
    if (result instanceof CXLPromise) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  } catch (error) {
    reject(error);
  }
}

class CXLPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];

    const resolve = (res) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        //添加微任务，效果同settimeout
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) {
            return;
          }
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = res;
          this.onfulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };
    const reject = (err) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        //添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) {
            return;
          }
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = err;
          this.onrejectedFns.forEach((fn) => {
            fn(this.reason);
          });
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
    const defaultOnRejected = (err) => {
      throw err;
    };
    onrejected = onrejected || defaultOnRejected;

    return new CXLPromise((resolve, reject) => {
      //再次调用then方法时，需要考虑此时的promise状态
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onfulfilledFns.push(() => {
          execFunctionWithCatchError(onfulfilled, this.value, resolve, reject);
        });
        this.onrejectedFns.push(() => {
          execFunctionWithCatchError(onrejected, this.reason, resolve, reject);
        });
      }
      if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
        execFunctionWithCatchError(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        execFunctionWithCatchError(onrejected, this.reason, resolve, reject);
      }
    });
  }

  catch(onrejected) {
    return this.then(undefined, onrejected);
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(paragram) {
    return new CXLPromise((resolve) => {
      if (paragram instanceof CXLPromise) {
        return paragram.then(resolve);
      } else {
        resolve(paragram);
      }
    });
  }

  static reject(paragram) {
    return new CXLPromise((resolve, reject) => {
      reject(paragram);
    });
  }

  //注意返回结果的顺序
  static all(promiseArray) {
    let promiseMap = new Map();
    return new CXLPromise((resolve, reject) => {
      promiseArray.forEach((singlePromise) => {
        singlePromise
          .then((res) => {
            promiseMap.set(singlePromise, res);
            if (promiseMap.size === promiseArray.length) {
              let values = [];
              promiseArray.forEach((res) => {
                values.push(promiseMap.get(res));
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
      promiseArray.forEach((singlePromise) => {
        singlePromise
          .then(
            (res) => {
              promiseMap.set(singlePromise, { status: 'fulfilled', value: res });
            },
            (err) => {
              promiseMap.set(singlePromise, { status: 'rejected', reason: err });
            }
          )
          .finally(() => {
            if (promiseMap.size === promiseArray.length) {
              let values = [];
              promiseArray.forEach((element) => {
                values.push(promiseMap.get(element));
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
          .then((result) => {
            resolve(result);
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

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1111);
  }, 4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3333);
  }, 3000);
});

CXLPromise.race([p3, p1, p2])
  .then((res) => {
    console.log('res1: ', res);
  })
  .catch((err) => {
    console.log('err1: ', err);
  });

CXLPromise.any([p3, p1, p2])
  .then((res) => {
    console.log('res2: ', res);
  })
  .catch((err) => {
    console.log('err2: ', err.errors);
  });
