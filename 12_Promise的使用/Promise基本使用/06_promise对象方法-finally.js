/**
 * finally:不管状态变为fulfilled还是变为rejected都会执行finally的回调
 * 并且finally回调函数没有参数，所以在finally里面不知道执行成功还是失败
 */
const promise1 = new Promise((resolve, reject) => {
  //   resolve("sucess message");
  //   reject("error message");
  throw new Error("error");
});

promise1
  .then((result) => {
    console.log("result:", result);
  })
  .catch((err) => {
    console.log("err:", err);
  })
  .finally(() => {
    console.log("finally执行了");
  });
