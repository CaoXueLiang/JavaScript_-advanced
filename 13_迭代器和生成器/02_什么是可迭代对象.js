/**
 * 可迭代对象:当一个对象实现了iterable protocol协议时，它就是一个可迭代对象
 * ①：是一个对象
 * ②：实现可迭代协议（[Symbol.iterator]返回一个迭代器）
 */

let iteratorObj = {
  names: ["lebi", "james", "xiaoming", "lining"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { value: this.names[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

const currentItetator = iteratorObj[Symbol.iterator]();
console.log(currentItetator.next());
console.log(currentItetator.next());
console.log(currentItetator.next());
console.log(currentItetator.next());
console.log(currentItetator.next());

//当调用`for of`时后调用对象的`[Symbol.iterator]`迭代器方法
//for...of可以遍历的东西必须是一个可迭代对象
for (const element of iteratorObj) {
  console.log(element);
}
