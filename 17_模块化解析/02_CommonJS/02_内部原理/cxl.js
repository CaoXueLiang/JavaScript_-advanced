const info = {
  name: "why",
  age: 18,
  foo: function () {
    console.log("foo函数~");
  },
};

setTimeout(() => {
  // info.name = "kobe"
  console.log("info--", info);
}, 2000);

module.exports = info;
