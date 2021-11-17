console.log("main");

require("./aaa");
require("./bbb");

/**
 *  引用顺序 -> 会形成树结构 -> 按深度优先进行查找
 *  main -> aaa -> ccc -> ddd -> eee
 *  bbb -> ccc ->eee
 *
 *  require多次引用，只会执行一次
 */
