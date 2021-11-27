function throttle(fn, wait, options = { leading: true, trailing: true }) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let isInvote = false; //记录第一次是否执行了

  function _throttle(...args) {
    //获取当前事件触发的时间
    const currentTime = new Date().getTime();

    //判断第一次是否执行
    if (!isInvote && leading) {
      isInvote = true;
      fn.apply(this, args);
      lastTime = currentTime;
    }

    if (lastTime === 0) {
      lastTime = currentTime;
    }

    if (currentTime - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = currentTime;
    }
  }
  return _throttle;
}
