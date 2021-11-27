function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false; //用来判断是否是第一次执行
  const _debounce = function (...args) {
    if (timer) {
      //取消上次的定时器
      clearTimeout(timer);
    }
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  };

  _debounce.cancle = function () {
    clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };
  return _debounce;
}
