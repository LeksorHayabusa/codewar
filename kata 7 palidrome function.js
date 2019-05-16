//needs revo (revese) function from previous commit!
function isPali(a = '') {
 let b = a.match(/\w+/gi);
 b = b.join('');
 b = b.toLowerCase();
 let bLength = b.length;
 console.log(b, bLength)
 return bLength%2 === 0 ? compare(b, bLength) : compare(b, bLength, true);

 function compare(a, aLength, toEqualizeIt = false) {
  let first = a.slice(0, aLength/2);
  let second = revo(a.slice(
    toEqualizeIt ? aLength/2+1 : aLength/2,
    aLength));
  console.log(first, second);
  return first === second;
 }
}
