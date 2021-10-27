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
    onrejected = onrejected || normalRejected;
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
    this.then(
      () => {
        onfinally();
      },
      () => {
        onfinally();
      }
    );
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
