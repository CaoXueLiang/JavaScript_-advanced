function throttle(fn, wait, options = { leading: true, trailing: true }) {
  const { leading, trailing, resultCallback } = options;
  let lastTime = 0;
  let timeOut = null;
  function _throttle(...args) {
    const currentTime = new Date().getTime();
    if (!lastTime && !leading) {
      lastTime = currentTime;
    }

    let remainTime = wait - (currentTime - lastTime);
    if (remainTime <= 0) {
      if (timeOut) {
        clearTimeout(timeOut);
        timeOut = null;
      }
      const result = fn.apply(this, args);
      resultCallback(result);
      lastTime = currentTime;
      return;
    }

    if (!timeOut && trailing) {
      timeOut = setTimeout(() => {
        const result = fn.apply(this, args);
        resultCallback(result);
        timeOut = null;
        lastTime = !leading ? 0 : new Date().getTime();
      }, remainTime);
    }
  }

  _throttle.cancle = function () {
    if (timeOut) {
      clearTimeout(timeOut);
      timeOut = null;
    }
    lastTime = 0;
  };

  return _throttle;
}
