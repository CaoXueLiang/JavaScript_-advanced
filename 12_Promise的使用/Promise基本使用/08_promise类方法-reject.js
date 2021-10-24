// const promise1 = Promise.reject("jjjjjj");
// const promise1 = Promise.reject(new Promise(() => {}));
const promise1 = Promise.reject({
  then: function (resolve, reject) {
    resolve("hhhhhh");
  },
});

promise1.catch((error) => {
  console.log("error", error);
});

// Promise.reject 无论传入什么类型的值，返回的结果都是rejected，走catch回调函数
