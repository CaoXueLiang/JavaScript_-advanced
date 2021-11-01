/**
 * 迭代器：在容器对象(constianer,例如链表和数组)上遍历对象，使用该接口无需关心对象的内部实现细节。
 * 在JavaScript中，迭代器的规定:
 * ①：迭代器也是一个具体的对象
 * ②：这个对象需要符合迭代器协议 (next方法:返回值包含done和value两个值)
 */

const names = ["kebi", "james", "lining", "xiaoming"];

let index = 0;
const iterator = {
  next: function () {
    if (index < names.length) {
      return { value: names[index++], done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log("------------------------");

/**
 * 创建迭代器函数
 */
function createIterator(normalArray) {
  let index = 0;
  return {
    next: function () {
      if (index < normalArray.length) {
        return { value: normalArray[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const nums = [1, 3, 7, 9, 20];
const nameIterator = createIterator(nums);
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
