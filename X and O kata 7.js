function XO(str) {
	let arr = [],
		lX,
		lO;
    str = str.toLowerCase();
    arr = str.split('')
    lX = arr.filter(e => (e == 'x')).length;
    lO = arr.filter(e => (e == 'o')).length;
    if ( lO === lX) {
    	return true
    } else { return false }
}