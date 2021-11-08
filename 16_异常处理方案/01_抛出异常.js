class myError {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
}

function foo(type) {
  console.log("foo函数开始执行");
  if (type == 0 || type == 1) {
    // 1.抛出一个普通字符串
    throw "err message";

    // 2.抛出一个普通对象
    throw { errorType: "10010", message: "error message" };

    // 3.抛出一个类创建的对象
    throw new myError("10010", "my error message");

    // 4.抛出Error类
    const currentError = new Error("error message");
    console.log("name--", currentError.name);
    console.log("message--", currentError.message);
    console.log("stack--", currentError.stack);
    throw currentError;

    // 5.抛出Error子类型`TypeError`
    throw new TypeError("type error");
  }

  //抛出错误后，后续代码不会执行了
  console.log("foo函数结束");
}

try {
  foo(0);
} catch (error) {
  console.log(error);
}

console.log("后续的代码~");
