function jsonStringify(data) {
  if (typeof data !== 'object') {
    if (Number.isNaN(data) || data === Infinity || data === -Infinity) {
      return 'null';
    } else if (typeof data === 'function' || typeof data === 'symbol' || typeof data === 'undefined') {
      return undefined;
    } else if (typeof data === 'string') {
      return '"' + data + '"';
    }
    return String(data);
  } else if (typeof data === 'object') {
    if (data === null) {
      return 'null';
    } else if (data.toJSON && typeof data.toJSON === 'function') {
      return jsonStringify(data.toJSON());
    } else if (Array.isArray(data)) {
      let result = [];
      data.forEach((element, index) => {
        if (typeof element === 'function' || typeof element === 'symbol' || typeof element === 'undefined') {
          result[index] = 'null';
        } else {
          result[index] = jsonStringify(element);
        }
      });
      result = `[${result}]`;
      return result.replace(/'/g, '"');
    } else {
      let result = [];
      Object.keys(data).forEach((key) => {
        if (typeof key !== 'symbol') {
          let value = data[key];
          if (typeof value !== 'symbol' && typeof value !== 'function' && typeof value !== 'undefined') {
            result.push(`"${key}":${jsonStringify(value)}`);
          }
        }
      });
      return ('{' + result + '}').replace(/'/g, '"');
    }
  }
}

let nl = null;
console.log(jsonStringify(nl) === JSON.stringify(nl));
// true
let und = undefined;
console.log(jsonStringify(undefined) === JSON.stringify(undefined));
// true
let boo = false;
console.log(jsonStringify(boo) === JSON.stringify(boo));
// true
let nan = NaN;
console.log(jsonStringify(nan) === JSON.stringify(nan));
// true
let inf = Infinity;
console.log(jsonStringify(Infinity) === JSON.stringify(Infinity));
// true
let str = 'jack';
console.log(jsonStringify(str) === JSON.stringify(str));
// true
let reg = new RegExp('w');
console.log(jsonStringify(reg) === JSON.stringify(reg));
// true
let date = new Date();
console.log(jsonStringify(date) === JSON.stringify(date));
// true
let sym = Symbol(1);
console.log(jsonStringify(sym) === JSON.stringify(sym));
// true
let array = [1, 2, 3, undefined, Symbol(0)];
console.log(jsonStringify(array) === JSON.stringify(array));
// true
let obj = {
  name: 'jack',
  age: 18,
  attr: ['coding', 123],
  date: new Date(),
  uni: Symbol(2),
  sayHi: function () {
    console.log('hi');
  },
  info: {
    sister: 'lily',
    age: 16,
    intro: {
      money: undefined,
      job: null,
    },
  },
};
console.log(jsonStringify(obj) === JSON.stringify(obj));
console.log(jsonStringify(obj));
console.log(JSON.stringify(obj));
// true
