function isFunction(fn) {
  return typeof fn === "function";
}

function isObject(value) {
  return typeof value === "object";
}

class EventEmitter {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback) {
    let listeners = this.eventBus[eventName];
    if (!listeners) {
      listeners = new Set();
      this.eventBus[eventName] = listeners;
    }
    if (isObject(eventCallback)) {
      listeners.add(eventCallback);
    } else {
      listeners.add({
        listener: eventCallback,
        once: false,
      });
    }
  }

  once(eventName, eventCallback) {
    this.on(eventName, {
      listener: eventCallback,
      once: true,
    });
  }

  off(eventName, eventCallback) {
    let listeners = this.eventBus[eventName];
    if (!listeners) return;
    let deleteElement = () => {
      for (const element of listeners) {
        if (element.listener === eventCallback) {
          return element;
        }
      }
    };
    if (deleteElement()) {
      listeners.delete(deleteElement());
    }
  }

  allOff(eventName) {
    if (eventName && this.eventBus[eventName]) {
      this.eventBus[eventName] = [];
    }
  }

  emit(eventName, ...args) {
    let listeners = this.eventBus[eventName];
    if (!listeners) return;
    listeners.forEach((element) => {
      element.listener.apply(this, args || []);
      if (element.once) {
        this.off(eventName, element.listener);
      }
    });
  }
}

// 测试事件总线
const eventBus = new EventEmitter();

const hancleCallback1 = function (name) {
  console.log("say1", name);
};
const hancleCallback2 = function (name) {
  console.log("say2", name);
};
const hancleCallback3 = function (name) {
  console.log("say3", name);
};

const hancleCallback4 = function (name) {
  console.log("say4", name);
};

eventBus.on("say", hancleCallback1);
eventBus.on("say", hancleCallback2);
eventBus.once("say", hancleCallback3);
eventBus.once("say", hancleCallback4);

eventBus.emit("say", "小明");
eventBus.emit("say", "李宁");

// eventBus.allOff("say");

eventBus.off("say", hancleCallback1);
// eventBus.off("say", hancleCallback2);

eventBus.emit("say", "xiaoming");
