/**
 * defineProperty
 * 一： 数据属性描述符 (默认值如下所示)
 *  value: underfined,
 *  writable: false,  //是否可以修改赋值
 *  enumerable: false, //是否可以枚举
 *  configurable: false //是否可以配置（设为false表示不可删除，也不可以重新定义属性描述符）
 */
var obj = {
  name: "xiaoming",
};

Object.defineProperty(obj, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: true,
});

console.log(Object.keys(obj));
console.log(obj);
obj.age = 40;
delete obj.age;
Object.defineProperty(obj, "age", {
  value: 50,
  configurable: true,
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log("------------------------------------");

/**
 * 二：访问器属性描述符
 *  访问器属性和 `writable` `value`不能同时使用
 *  configurable：是否可以配置
 *  enumerable: 是否可以枚举
 *  gettter函数
 *  setter函数
 */
var obj1 = {
  name: "kebi",
  _adress: "北京市",
};

Object.defineProperty(obj1, "adress", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("访问了adress");
    return this._adress;
  },
  set(newValue) {
    console.log("修改了adress");
    this._adress = newValue;
  },
});

console.log(obj1.adress);
obj1.adress = "石家庄市";
console.log(obj1.adress);
console.log("------------------------------------");

/**
 * 三：同时定义多个属性
 * `Object.defineProperties`
 */

var obj2 = {
  _age: 18,
};
Object.defineProperties(obj2, {
  name: {
    value: "kebi",
    configurable: true,
    writable: true,
    enumerable: true,
  },
  age: {
    configurable: true,
    enumerable: true,
    set(newValue) {
      this._age = newValue;
    },
    get() {
      return this._age;
    },
  },
});

console.log(obj2);
console.log(obj2.age);
obj2.age = 20;
console.log(obj2.age);
console.log(Object.getOwnPropertyDescriptor(obj2, "age"));
