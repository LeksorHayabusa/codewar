function indxo(arr, b) {
 if( Array.isArray(arr) && (typeof b === 'number' || typeof b === 'string')) {
  for( const [i, e] of arr.entries()) {
   if( e === b ) return i;
  }
  return -1;
 }
}
