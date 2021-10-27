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
    //判断then方法只穿一个参数的情况
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
    this.then(undefined, onrejected);
  }
}

const newPromise = new CXLPromise((resolve, reject) => {
  resolve('我是新的promise的返回值');
});

const promise1 = new CXLPromise((resolve, reject) => {
  //   resolve("sucess message");
  reject('error message');
  // throw new Error("errorsMessage"); //直接抛出异常不能捕获到，需要使用try，catch
});

//一、验证`catch`可以多次调用
promise1.catch((err) => {
  console.log('err1: ', err);
});

promise1.catch((err) => {
  console.log('err2: ', err);
});

promise1.catch((err) => {
  console.log('err3: ', err);
});

//一、验证`catch`放在结尾可以捕获到错误信息
promise1
  .then((res) => {
    console.log('res4: ', res);
    throw new Error('heiheihei');
  })
  .then((res) => {
    console.log('res5: ', res);
  })
  .catch((err) => {
    console.log('error4: ', err);
  });
