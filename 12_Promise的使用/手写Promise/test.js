const newPromise = new Promise((resolve, reject) => {
  resolve("我是新的promise的返回值");
});

const promise1 = new Promise((resolve, reject) => {
  //   resolve("sucess message");
  reject("error message");
  // throw new Error("errorsMessage"); //直接抛出异常不能捕获到，需要使用try，catch
});

//调用then方法多次调用
promise1
  .then(
    (res) => {
      console.log("res4:", res);
      // return "aaaa";
      //   return newPromise;
      //   throw new Error("err message");
    },
    (err) => {
      console.log("err4:", err);
      //   return "bbbbb";
      return newPromise;
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
