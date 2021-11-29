const obj = {
  name: "lining",
  age: 18,
  height: 1.88,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
};

const obj1 = {
  name: "lining",
  age: 18,
  height: 1.88,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
  toJSON: function () {
    return "123456";
  },
};

// 1、直接转化，会将多余的换行和空格去掉
console.log(JSON.stringify(obj));

// 2、第二个参数可以是数组或者函数
console.log(JSON.stringify(obj, ["name", "age", "hobbies"]));
const json2 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 20;
  }
  if (key === "height") {
    return `${value}m`;
  }
  return value;
});
console.log(json2);

// 3、第三个参数是数字或者字符串，最长为10位，超过10位取10位
const json3 = JSON.stringify(obj, null, 5);
console.log(json3);
const json4 = JSON.stringify(obj, null, "----------------------------------");
console.log(json4);

// 4、如果该对象有toJSON方法，则有限调用该对象的toJSON方法
console.log(JSON.stringify(obj1));
