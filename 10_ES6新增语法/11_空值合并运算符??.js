let myName = 0;

let newName = myName || "xiaoming";
let myNewName = myName ?? "xioaming";
console.log(newName);
console.log(myNewName);

/**
 * 一般情况下是 || 也可以正确使用，但是`??`更精确
 */
