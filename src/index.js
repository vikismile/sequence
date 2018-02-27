module.exports = function longestConsecutiveLength(array) {
    massiv = []
    let f = 0
    let prev = 0
    if(array.length==0) return 0
    if(array.length==1) return 1
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

  }
  } 
