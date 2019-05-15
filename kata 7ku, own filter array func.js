'use strict'
function filt(a, callback) {
 if( Array.isArray && typeof callback === 'function') {
  const copy = [];
  a.forEach((e,i) => callback.call(null, e) ? copy.push(e) : null);
  return copy;
 }
}
