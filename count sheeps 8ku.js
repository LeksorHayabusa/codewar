const countSheep = function (num){
  function recur() {
    if (num > n){
      n++;
      text += (n + ' sheep...')
      return recur()
    } else {
        return text}
  }
  let n = 0,
      text = '';
  return recur();
}