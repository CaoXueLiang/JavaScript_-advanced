const s1 = Symbol();
const s2 = Symbol();

let obj = {
  name: "why",
  friend: {
    name: "kobe",
  },
  foo: function () {
    console.log("foo function");
  },
  [s1]: "abc",
  s2: s2,
  age: undefined,
  date: new Date(),
  regexp: /^123$/,
  empty: NaN,
  indifinity: Infinity,
  minusIndifinity: -Infinity,
};

Object.setPrototypeOf(obj, { myName: "hhhh" });
Object.defineProperty(obj, "immedirate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: "我是不可枚举类型",
});

// obj.inner = obj;
const copyObj = JSON.parse(JSON.stringify(obj));
console.log(copyObj);
console.log(obj.friend === copyObj.friend);

/**
 * 可以通过 `JSON.parse(JSON.stringify(object))` 实现简单的深拷贝
 * ❌但是存在一些问题:
 * 1、拷贝的对象值中有函数、underfined、symbol这几种类型，经过Json.Stringify序列化后的字符串中这个键值对会消失
 * 2、属性名中是Symbol类型时，经过Json.Stringify序列化之后，这个键值对也会消失
 * 3、无法拷贝不可枚举类型
 * 4、无法拷贝对象的原型链
 * 5、拷贝Date引用类型会变成字符串
 * 6、拷贝 RegExp 引用类型会变成空对象
 * 7、对象中含有 NaN,Infinnity,-Infinity, JSON序列化的结果会变成null
 * 8、无法拷贝对象的循环引用
 */
