let obj = {
  name: "xiaoming",
  age: 30,
};

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log(`${key} 被访问了`);
    return Reflect.get(target, key);
  },

  set(target, key, newValue) {
    console.log(`${key} 被设置了`);
    Reflect.set(target, key, newValue);
  },

  deleteProperty(target, key) {
    console.log(`删除了属性 ${key}`, target);
  },

  has(target, key) {
    console.log(`监听in操作 ${key}`, target);
  },
});

objProxy.name = "kebi";
objProxy.age = 40;
console.log(objProxy.name);
console.log(objProxy.age);

delete objProxy.name;

console.log("name" in objProxy);
