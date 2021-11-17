//多次`import`，只会执行一次
//对模块内的内容是引用

import { count, append } from "./aaa.js";
append();
append();
append();
console.log(count);
