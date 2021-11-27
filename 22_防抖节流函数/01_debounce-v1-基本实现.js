function debounce(fn, delay) {
  let timer = null;
  function _debounce() {
    if (timer) {
      //取消上次的定时器
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  }
  return _debounce;
}
