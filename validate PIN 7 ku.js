function validatePIN(str){
  const d4 = /\b\d{4}\b/;
  const d6  = /\b\d{6}\b/;
  return ((d4.test(str) || d6.test(str)) && str >= 0) ? true : false;
}