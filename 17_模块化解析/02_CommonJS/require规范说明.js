/* 一.require 查找规范：require(x)

1、情况一：x 是 node 的一个核心模块，例如 path,http
直接返回该模块，并停止查找

2、情况二：x 是以"./","../","/"开头的
第一步：将 x 作文一个文件在对应的目录下查找
① 如果有后缀名，按照后缀名的格式查找对应的文件
② 如果没有后缀名，会按照如下顺序
---1> 直接查找文件 X
---2> 查找 X.js 文件
---3> 查找 X.json 文件
---4> 查找 X.node 文件

第二步：没有找到对应的文件，将 X 作为一个目录
查找目录下面的 index 文件
---1> 查找 X/index.js 文件
---2> 查找 X/index.json 文件
---3> 查找 X/index.node 文件
如果没有找到，那么报错：not found

3、情况三：直接是一个 X（没有路径），并且 X 不是一个核心模块
[
'/Users/xueliangcao/JavaScript_advanced/17_模块化解析/02_CommonJS/03_export 和 require/node_modules',
'/Users/xueliangcao/JavaScript_advanced/17_模块化解析/02_CommonJS/node_modules',
'/Users/xueliangcao/JavaScript_advanced/17_模块化解析/node_modules',
'/Users/xueliangcao/JavaScript_advanced/node_modules',
'/Users/xueliangcao/node_modules',
'/Users/node_modules',
'/node_modules'
]
*/
