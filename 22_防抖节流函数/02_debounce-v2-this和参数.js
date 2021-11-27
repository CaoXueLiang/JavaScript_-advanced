function debounce(fn, delay) {
  let timer = null;
  function _debounce(...args) {
    if (timer) {
      //取消上次的定时器
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
  return _debounce;
}
