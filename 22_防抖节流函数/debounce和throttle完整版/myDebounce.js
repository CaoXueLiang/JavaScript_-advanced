function debounce(fn, delay, immedirate = false) {
  let isInvote = false;
  let timer = null;
  let lastTime = 0;

  const getNowTime = function () {
    return new Date().getTime();
  };

  function _debounce(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (immedirate) {
      if (getNowTime() - lastTime >= delay) {
        isInvote = false;
      }
      if (!isInvote) {
        fn.apply(this, args);
        isInvote = true;
      }
      lastTime = getNowTime();
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  }

  return _debounce;
}
