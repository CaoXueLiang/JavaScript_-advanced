var obj = {
  name: "kebi",
  age: 20,
};

var info = Object.create(obj, {
  adress: {
    value: "beijingshi",
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

console.log(info);

//判断属性在对象的实例上`hasOwnProperty`,不是在原型上
console.log(info.hasOwnProperty("adress"));
console.log(info.hasOwnProperty("age"));

//`in` 操作符，不管属性在对象实例上还是在原型上都返回true
console.log("name" in info);
console.log("adress" in info);

//判断属性在原型上
function isInProto(obj, key) {
  if (!obj.hasOwnProperty(key) && key in obj) {
    return true;
  }
  return false;
}

console.log(isInProto(info, "adress"));
console.log(isInProto(info, "name"));
console.log(isInProto(info, "age"));
