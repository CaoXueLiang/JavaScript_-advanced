/**
 * promise有三种状态：
 * 1、pending: 待定状态，既没有兑现也没有拒绝，当执行executor中的代码时，处于该状态
 * 2、fulfilled: 已兑现，意味着操作成功，执行resolve时，处于该状态
 * 3、rejected: 已拒绝，意味着操作失败,执行reject时，处于该状态
 *
 * ⚠️注意：状态一旦改变就不能再次变化
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve message");
    reject("error message");
  }, 1000);
});

promise1
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
