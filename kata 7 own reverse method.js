function revo(a) {
 if(typeof a === 'string') {
     let b = '';
     for(let i = 0; i < a.length; i++) {
      b += a[a.length - 1 - i];
     }
     return b;
 }
}
