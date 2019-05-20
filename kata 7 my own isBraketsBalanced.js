function isBalanced(a) {
 if(typeof a === 'string'){
  let b = a.match(/(\{|\})/g);
  let i = 0;
  while ( i < b.length ) {
   if( checkSqnc(i,b)){
     b.splice(i,2);
     i = 0;
    } else if(b.length >= 2) {
      i++
    } else if(b.length < 2) {
      break;
    }
  }
  return b.length > 0 ? false : true;
  }
  
 function checkSqnc(i, arr) {
  if( arr[i] === '{' && arr[i+1] === '}'){
   return true
  }
 }
}
