const JSONString =
  '{"name":"xiaoming","age":19,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}';

// 1、直接转化不带参数
const result = JSON.parse(JSONString);
console.log(result);

// 2、带第二个参数，reviver
const result2 = JSON.parse(JSONString, (key, value) => {
  if (key === "name") {
    return "xiaoming_xiaoming_xiaoming";
  }
  if (key === "age") {
    return 30;
  }
  return value;
});
console.log(result2);
