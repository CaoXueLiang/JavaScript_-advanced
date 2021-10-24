//一、同一个promise也可以多次调用catch方法
const promise = new Promise((resolve, reject) => {
  reject("error message");
});

promise.catch((res) => {
  console.log("err1: ", res);
});

promise.catch((res) => {
  console.log("err2: ", res);
});

promise.catch((res) => {
  console.log("err3: ", res);
});

//二、当executor抛出异常时, 也是会调用错误(拒绝)捕获的回调函数的
const promise1 = new Promise((resolve, reject) => {
  throw new Error("error error");
});

promise1.catch((error) => {
  console.log("catchError: ", error);
});

//三、catch方法也有返回值，也是一个promise
const promise2 = new Promise((resolve, reject) => {
  throw new Error("error error");
});

promise2
  .catch((error) => {
    console.log("--------------------");
    console.log("catchError222: ", error);
    return "我是catch回调函数中的返回值";
    // throw new Error("new error");
  })
  .then((res) => {
    console.log("res2222: ", res);
  })
  .catch((err) => {
    console.log("err2222: ", err);
  });
