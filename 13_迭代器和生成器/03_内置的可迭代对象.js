/**
 * 内置的可迭代对象有：
 * String、Array、Map、Set、arguments对象、NodeList集合
 */
const normalStr = "woshicaoxueliang";
for (const element of normalStr) {
  console.log(element);
}

const normalMap = new Map();
normalMap.set("1", "value1");
normalMap.set("2", "value2");
normalMap.set("3", "value3");
for (const element of normalMap) {
  console.log(element);
}

const normalSet = ["lining", "james", "kebi"];
for (const element of normalSet) {
  console.log(element);
}
