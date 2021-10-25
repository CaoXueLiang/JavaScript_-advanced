const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

/** 工具类函数，捕获异常 */
function execFunctionWithCatchError(exefn, value, resolve, reject) {
  try {
    const result = exefn(value);
    resolve(result);
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
    // console.log("------status-----", this.status);
    return new CXLPromise((resolve, reject) => {
      //再次调用then方法时，需要考虑此时的promise状态
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onfulfilledFns.push(() => {
          //   try {
          //     const value = onfulfilled(this.value);
          //     resolve(value);
          //   } catch (err) {
          //     reject(err);
          //   }
          execFunctionWithCatchError(onfulfilled, this.value, resolve, reject);
        });
        this.onrejectedFns.push(() => {
          //   try {
          //     const reason = onrejected(this.reason);
          //     resolve(reason);
          //   } catch (err) {
          //     reject(err);
          //   }
          execFunctionWithCatchError(onrejected, this.reason, resolve, reject);
        });
      }
      if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
        // try {
        //   const result = onfulfilled(this.value);
        //   resolve(result);
        // } catch (error) {
        //   reject(error);
        // }
        execFunctionWithCatchError(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        // try {
        //   const result = onrejected(this.reason);
        //   resolve(result);
        // } catch (error) {
        //   reject(error);
        // }
        execFunctionWithCatchError(onrejected, this.reason, resolve, reject);
      }
    });
  }
}

const promise1 = new CXLPromise((resolve, reject) => {
  //   resolve("sucess message");
  reject("error message");
  //   throw new Error("errorsMessage"); //直接抛出异常不能捕获到，需要使用try，catch
});

// 调用then方法多次调用
promise1.then(
  (res) => {
    console.log("res1:", res);
  },
  (err) => {
    console.log("err1:", err);
  }
);

promise1.then(
  (res) => {
    console.log("res2:", res);
  },
  (err) => {
    console.log("err2:", err);
  }
);

// 在确定Promise状态之后, 再次调用then
setTimeout(() => {
  promise1.then(
    (res) => {
      console.log("res3:", res);
    },
    (err) => {
      console.log("err3:", err);
    }
  );
}, 2000);

// 调用then方法多次调用
promise1
  .then(
    (res) => {
      console.log("res4:", res);
      return "aaaa";
      //   throw new Error("err message");
    },
    (err) => {
      console.log("err4:", err);
      return "bbbbb";
      // throw new Error("err message")
    }
  )
  .then(
    (res) => {
      console.log("res5:", res);
    },
    (err) => {
      console.log("err5:", err);
    }
  );
