function miss(a){
 if(Array.isArray(a)){
  let count = 0;
  for(const [i,e] of  a.entries()){
    count = i + 1;
    if(!a.includes(count)) return count;
  }
 }
}
