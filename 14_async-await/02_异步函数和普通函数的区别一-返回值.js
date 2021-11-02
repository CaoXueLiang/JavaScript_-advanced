/**
 * 注意异步函数的返回值是一个`Promise`
 *
 *  返回值为true，证明了返回值是一个promise
 *  console.log(foo() instanceof Promise);
 */

async function foo() {
  //1.返回值是一个普通值
  return 10;

  //2. 返回值是thenabble的对象
  return {
    then: function (resolve, reject) {
      //   resolve(100);
      reject("我是错误信息");
    },
  };

  //3.返回是一个`promise`
  return new Promise((resolve, reject) => {
    resolve("hhhhhhhhh");
  });
}

const result = foo();
result
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
