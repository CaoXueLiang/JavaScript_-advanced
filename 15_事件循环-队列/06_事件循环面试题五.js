setTimeout(() => {
  console.log("setTimeout start");
  new Promise((resolve) => {
    console.log("promise1 start");
    resolve();
  }).then(() => {
    console.log("promise1 end");
  });
  console.log("setTimeout end");
}, 0);
function promise2() {
  return new Promise((resolve) => {
    console.log("promise2");
    resolve();
  });
}
async function async1() {
  console.log("async1 start");
  await promise2();
  console.log("async1 end");
}
async1();
console.log("script end");

// async1 start
// promise2
// script end
// async1 end
// setTimeout start
// promise1 start
// setTimeout end
// promise1 end
