function isObject(value) {
  let type = typeof value;
  if (type !== null && (type === "object" || type === "function")) {
    return true;
  }
  return false;
}

function deepClone(originalValue, hash = new WeakMap()) {
  if (!isObject(originalValue)) {
    return originalValue;
  }

  if (typeof originalValue === "function") {
    return originalValue;
  }

  if (originalValue instanceof Date) {
    return new Date(originalValue);
  }

  if (originalValue instanceof RegExp) {
    return new RegExp(originalValue);
  }

  if (hash.get(originalValue)) {
    return hash.get(originalValue);
  }

  if (originalValue instanceof Set) {
    let tmpSet = new Set();
    originalValue.forEach((element) => {
      tmpSet.add(deepClone(element), hash);
    });
    hash.set(originalValue, tmpSet);
    return tmpSet;
  }

  if (originalValue instanceof Map) {
    let tmpMap = new Map();
    originalValue.forEach((value, key) => {
      tmpMap.set(key, deepClone(value), hash);
    });
    hash.set(originalValue, tmpMap);
    return tmpMap;
  }

  let prototyDes = Object.getOwnPropertyDescriptors(originalValue);
  let newObject = Object.create(
    Object.getPrototypeOf(originalValue),
    prototyDes
  );
  hash.set(originalValue, newObject);
  let keys = Reflect.ownKeys(originalValue);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    newObject[key] = deepClone(originalValue[key], hash);
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
  hobbies: ["abc", "nba", "cba"],
  foo: function (m, n) {
    console.log("foo function");
    console.log("100代码逻辑");
    return 123;
  },
  [s1]: "abc",
  s2: s2,
  set: new Set(["aaa", "bbb", "ccc", { ddd: "dd" }]),
  map: new Map([
    ["aaa", "abc"],
    ["bbb", "cba"],
    ["ccc", { ccc: "cc" }],
  ]),
  date: new Date(),
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
