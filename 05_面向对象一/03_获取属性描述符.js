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

//获取单个属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj1, "adress"));

//获取所有属性的属性描述符
console.log(Object.getOwnPropertyDescriptors(obj1));
