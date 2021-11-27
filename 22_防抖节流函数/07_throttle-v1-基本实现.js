function throttle(fn, wait, options = { leading: true, trailing: true }) {
  let lastTime = 0;
  function _throttle(...args) {
    const currentTime = new Date().getTime();
    // 当前事件的时间 - 上一次真正执行的时间 > wait。则触发该事件
    if (currentTime - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = currentTime;
    }
  }
  return _throttle;
}
