function isObject(value) {
  const type = typeof value;
  if (type !== null && (type === "object" || type === "function")) {
    return true;
  }
  return false;
}

function deepClone(originalObject, hash = new WeakMap()) {
  //判断是否是基本数据类型
  if (!isObject(originalObject)) {
    return originalObject;
  }

  //判断是否是函数
  if (typeof originalObject === "function") {
    return originalObject;
  }

  //判断是Date类型
  if (originalObject instanceof Date) {
    return new Date(originalObject);
  }

  //判断是 RegExp类型
  if (originalObject instanceof RegExp) {
    return new RegExp(originalObject);
  }

  //判断是否存在 map中
  if (hash.get(originalObject)) {
    return hash.get(originalObject);
  }

  //判断是否是Set
  if (originalObject instanceof Set) {
    let tmpSet = new Set();
    originalObject.forEach((element) => {
      tmpSet.add(deepClone(element), hash);
    });
    return tmpSet;
  }

  //判断是否是Map
  if (originalObject instanceof Map) {
    let tmpMap = new Map();
    originalObject.forEach((value, key) => {
      tmpMap.set(key, deepClone(value), hash);
    });
    return tmpMap;
  }

  //用来处理不可枚举类型和原型上的属性
  let prototyDes = Object.getOwnPropertyDescriptors(originalObject);
  let newObject = Object.create(
    Object.getPrototypeOf(originalObject),
    prototyDes
  );

  //保存到map中
  hash.set(originalObject, newObject);

  // let newObject = Array.isArray(originalObject) ? [] : {};
  const keys = Reflect.ownKeys(originalObject);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    newObject[key] = deepClone(originalObject[key], hash);
  }

  return newObject;
}

// 测试代码
let s1 = Symbol("aaa");
let s2 = Symbol("bbb");
const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州",
    },
  },
  //数组类型
  hobbies: ["abc", "nba", "cba"],
  //函数类型
  foo: function (m, n) {
    console.log("foo function");
    console.log("100代码逻辑");
    return 123;
  },
  // Symbol作为key和value
  [s1]: "abc",
  s2: s2,

  // Set数据类型
  set: new Set(["aaa", "bbb", "ccc", { ddd: "dd" }]),

  // Map数据类型
  map: new Map([
    ["aaa", "abc"],
    ["bbb", "cba"],
    ["ccc", { ccc: "cc" }],
  ]),

  //Date类型
  date: new Date(),

  //Regexp类型
  regexp: /^123$/,
};

Object.setPrototypeOf(obj, { myName: "hhhh" });
Object.defineProperty(obj, "immedirate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: "我是不可枚举类型",
});

obj.inner = obj;

const copyObj = deepClone(obj);
obj.friend.address.city = "北京市";
console.log(obj);
console.log(obj.inner === obj);
console.log(copyObj);
console.log(copyObj.inner === copyObj);
