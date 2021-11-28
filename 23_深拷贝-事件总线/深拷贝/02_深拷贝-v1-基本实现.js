function isObject(value) {
  const type = typeof value;
  if (type !== null && (type === "object" || type === "function")) {
    return true;
  }
  return false;
}

function deepClone(originalObject) {
  if (!isObject(originalObject)) {
    return originalObject;
  }

  let newObject = {};
  for (const key in originalObject) {
    newObject[key] = deepClone(originalObject[key]);
  }

  return newObject;
}

// 测试代码
const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州",
    },
  },
};

const copyObj = deepClone(obj);
obj.friend.address.city = "北京市";
console.log(copyObj);
console.log(obj);
