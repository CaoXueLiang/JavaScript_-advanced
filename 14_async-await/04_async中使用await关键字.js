function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(222);
      //   reject(1111);
    }, 2000);
  });
}

// 1. await跟上表达式
// async function foo() {
//   const res1 = await requestData();
//   console.log("后面的代码1", res1);
//   console.log("后面的代码2");

//   const res2 = await requestData();
//   console.log("res2后面的代码", res2);
// }

// foo()
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

// 2.跟上其他的值
async function foo() {
  //   const res1 = await 123;
  //   const res1 = await {
  //     then: function (resolve, reject) {
  //       resolve("abc");
  //     },
  //   };
  const res1 = await new Promise((resolve) => {
    resolve("why");
  });
  console.log("res1:", res1);
}

foo();
