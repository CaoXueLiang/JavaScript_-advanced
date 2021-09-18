var obj = {
  name: "obj",
  running: function () {
    console.log(this.name + " running");
  },
  eating: function () {
    console.log(this.name + " eating");
  },
  studying: function () {
    console.log(this.name + " studying");
  },
};

obj.running();
obj.eating();
obj.studying();

var tmpObj = {
  name: "tmpObj",
  running: function () {
    console.log(tmpObj.name + " runding");
  },
};

tmpObj.running();
