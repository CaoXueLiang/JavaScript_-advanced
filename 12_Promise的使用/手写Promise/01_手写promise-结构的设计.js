const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

class CXLPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (res) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        console.log('resolve:', res);
        this.status = PROMISE_STATUS_FULFILLED;
        this.value = res;
      }
    };

    const reject = (err) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        console.log('err:', err);
        this.status = PROMISE_STATUS_REJECTED;
        this.reason = err;
      }
    };

    executor(resolve, reject);
  }
}

const promise1 = new CXLPromise((resolve, reject) => {
  reject('error message');
  resolve('sucess message');
});

// promise1
//   .then((result) => {
//     console.log('res: ', result);
//   })
//   .catch((err) => {
//     console.log('err: ', err);
//   });
