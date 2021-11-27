function debounce(fn, delay, immediate = false, callback) {
  let timer = null;
  let isInvoke = false; //用来判断是否是第一次执行
  const _debounce = function (...args) {
    if (timer) {
      //取消上次的定时器
      clearTimeout(timer);
    }
    if (immediate && !isInvoke) {
      const result = fn.apply(this, args);
      callback(result);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args);
        callback(result);
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
