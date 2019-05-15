'use strict'
function red(a, cb, b) {
 if (Array.isArray(a)
  && typeof cb === 'function'
  && typeof b  === 'number') {
   a.forEach( e => b = cb.call(null, b, e));
   return b;
  }
}
