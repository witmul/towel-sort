
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let empty_arr = []

  if (matrix === undefined){
    return empty_arr
  }


  for (let i = 0; i < matrix.length; i++) {

    let arr = []

    if(i == 0) {
      arr = matrix[i]
    }else if (i % 2 !== 0 || i == 1){
      arr = matrix[i].reverse()
    }else{
      arr = matrix[i]
    }
    
    for (let ii = 0; ii < arr.length; ii++) {
        empty_arr.push(arr[ii]);
    }
  }
  return empty_arr
}
