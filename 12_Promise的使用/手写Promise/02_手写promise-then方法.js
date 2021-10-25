const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

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
    executor(resolve, reject);
  }

  then(onfulfilled, onrejected) {
    console.log("------status-----", this.status);
    //再次调用then方法时，需要考虑此时的promise状态
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onfulfilledFns.push(onfulfilled);
      this.onrejectedFns.push(onrejected);
    }
    if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
      onfulfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
      onrejected(this.reason);
    }
  }
}

const promise1 = new CXLPromise((resolve, reject) => {
  resolve("sucess message");
  // reject("error message");
});

/**
 * then 方法的特点：
 * 一、接收两个参数onfulfilled,onrejected 并且这两个参数都是回调函数
 * 二、同一个promise可以多次调用then方法，并且resolve时，多个`then`回调函数同时触发 ---> 用数组保存传入的回调函数参数
 * 三、考虑then方法中参数回调函数返回值的类型
 * 四、then方法也有返回值，返回值的类型也是一个promise
 * 五、考虑`throw Error`的情况
 *
 */

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
