/**
 * 什么事纯函数❓
 * ① 确定的输入一定会产生确定的输出
 * ② 函数在执行过程中，不能产生副作用
 * (副作用: 表示在执行一个函数时，除了返回函数值外，还对调用函数产生了附加影响。比如修改了全局变量，修改参数，或者改变外部的存储)
 */

var names = ["xiaoming", "xiaohong", "xioahua", "lining", "kebi"];
//slice没有改变元素组，是一个纯函数
var result1 = names.slice(2, 4);
console.log(result1);
console.log(names);

//splice修改了原数组，产生了副作用，不是一个纯函数
var result2 = names.splice(1, 2);
console.log(result2);
console.log(names);
