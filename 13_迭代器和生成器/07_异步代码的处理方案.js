function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

// 需求:
// 1> url: why -> res: why
// 2> url: res + "aaa" -> res: whyaaa
// 3> url: res + "bbb" => res: whyaaabbb

//第一种方式
let resultStr = "";
requestData("why").then((result) => {
  resultStr += result;
  requestData("aaa").then((result) => {
    resultStr += result;
    requestData("bbb").then((result) => {
      resultStr += result;
      console.log(resultStr);
    });
  });
});

//第二种方式
requestData("why")
  .then((result) => {
    return requestData(result + "aaa");
  })
  .then((result) => {
    return requestData(result + "bbb");
  })
  .then((result) => {
    console.log(result);
  });

//第三种方式: promsie + generator
function* getData() {
  let result1 = yield requestData("why");
  let result2 = yield requestData(result1 + "aaa1");
  let result3 = yield requestData(result2 + "bbb1");
  let result4 = yield requestData(result3 + "ccc1");
  console.log(result4);
}

//3-1>自己封装一个自己执行generator的函数
function execGenerator(fn) {
  const generator = fn();
  function exec(res) {
    const result = generator.next(res);
    console.log(result);
    if (result.done) {
      return result.value;
    }
    result.value.then((res) => {
      exec(res);
    });
  }
  exec();
}

execGenerator(getData);

//3-2>使用依赖包co自动执行
const co = require("co");
co(getData);

//第四种方式: async/await
async function getData2() {
  const res1 = await requestData("why");
  const res2 = await requestData(res1 + "aaa");
  const res3 = await requestData(res2 + "bbb");
  const res4 = await requestData(res3 + "ccc");
  console.log(res4);
}

getData2();
