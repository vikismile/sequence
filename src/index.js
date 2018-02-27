module.exports = function longestConsecutiveLength(array) {
    if(array.length==0) return 0
    if(array.length==1) return 1
    /*massiv = []
    let f = 0
    let prev = 0
    else{
    for(let i = 0; i< array.length; i++){
      if(array.indexOf(array[i]+1) == -1){ continue}
        else{
          prev=f
        massiv=[]
        pushmas(array[i])
        f= massiv.length
        if(f<prev){
          f=prev
        }
      }
    }
    return f 
  }
  function pushmas (num) {
      massiv.push(num)
    if(array.indexOf(num+1) == -1){
      return massiv
    }
   else pushmas(array[array.indexOf(num+1)])

  }*/
  a=0
  b=1
  array.sort(function(x,y){ return x-y;});
  for(let i = 1; i< array.length; i++){
    if(array[i]-array[i-1]==1){ 
      b++
    }
    if(array[i]-array[i-1] > 1){
      if(b>a) a=b
      b=1
    }
  } 
  return a
}
