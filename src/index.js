
// You should implement your task here.

module.exports = function towelSort (matrix) {
   
  let b = []
  if (matrix == [] || !matrix ) return [];
  if ( matrix.length == 0 ) return [];
  
  b = matrix.map( (e,i) => {
    if(i%2 == 0) return e
    else return e.reverse()
  })
  
  
  return b.reduce ((a,c) => a.concat(c))
}
