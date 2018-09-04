const _ = require('lodash');

const decorateWithProxy = (duck) => {
  let handler = {
    get: (target, propKey, receiver) => {
      const orig = target[propKey];
      if (_.isFunction(orig)) {
        const origMethod = orig;
        return function (...args) {
          let result = origMethod.apply(this, args);
          return `[proxy] ${result}`;
        };
      } else if (_.isString(orig)) {
        const origString = orig;
        return `[proxy] ${origString}`;
      } else {
        throw new Error('Type have not handled');
      }
    }
  };
  return new Proxy(duck, handler);
}

module.exports = decorateWithProxy;
