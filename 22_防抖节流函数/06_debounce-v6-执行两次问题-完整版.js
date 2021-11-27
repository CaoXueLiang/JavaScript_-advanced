/**
 * @param {回调函数} fn
 * @param {延迟时间} delay
 * @param {是否立即执行} immediate
 *
 * nowTime - previousTime > delay
 * 通过这个公式判断是否可以再次点击
 */

function debounce(fn, delay, immediate = false, callback) {
  let timer = null;
  let previousTime = 0;
  let isInvoke = false; //用来判断是否是第一次执行

  const nowTime = function () {
    return new Date().getTime();
  };

  const _debounce = function (...args) {
    if (timer) {
      //取消上次的定时器
      clearTimeout(timer);
    }
    if (immediate) {
      const currentNowTime = nowTime();
      if (currentNowTime - previousTime > delay) {
        isInvoke = false;
      }
      if (!isInvoke) {
        const result = fn.apply(this, args);
        callback(result);
        isInvoke = true;
      }
      previousTime = currentNowTime;
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
    previousTime = 0;
  };
  return _debounce;
}
