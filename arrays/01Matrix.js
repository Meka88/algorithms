//Given an m x n binary matrix mat, return the distance of the 
//nearest 0 for each cell.

//The distance between two adjacent cells is 1.

//Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// explanations 
// https://dev.to/alysachan830/leetcode-in-js-matrix-zeros-2jbf
// https://dev.to/alysachan830/leetcode-in-js-matrix-zeros-2jbf


var updateMatrix = function(mat) {
    const result = new Array(mat.length)
    .fill(0)
    .map(() => [])
  const getValue = (i, j) => {
    if (i < 0 || i >= mat.length || j < 0 || j >= mat[i].length) {
      return Infinity
    }
    return result[i][j]
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0
      } else {
        result[i][j] = 1 + Math.min(
          getValue(i, j - 1),
          getValue(i - 1, j),
        )
      }
    }
  }
  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[i].length - 1; j >= 0; j--) {
      if (mat[i][j] !== 0) {
        result[i][j] = Math.min(
          1 + Math.min(
            getValue(i, j + 1),
            getValue(i + 1, j),
          ),
          result[i][j],
        )
      }
    }
  }

  return result
};