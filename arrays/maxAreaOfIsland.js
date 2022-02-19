// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) 
//connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

//The area of an island is the number of cells with a value 1 in the island.

//Return the maximum area of an island in grid. If there is no island, return 0.

// explanation
// https://dev.to/seanpgallivan/solution-max-area-of-island-4njk

// var maxAreaOfIsland = function(grid) {
//     let ans = 0, n = grid.length, m = grid[0].length
//     const trav = (i, j) => {
//         if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
//         grid[i][j] = 0
//         return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
//     }
//     for (let i = 0; i < n; i++) 
//         for (let j = 0; j < m; j++)
//             if (grid[i][j]) ans = Math.max(ans, trav(i, j))
//     return ans

// };

// DFS solution
// explanation 
// https://dev.to/dsasse07/algorithm-tutorial-max-area-of-an-island-dfs-53eg
const maxAreaOfIsland = grid => {
    let maxArea = 0
  
    const mapIsland = (i, j) => {
      const stack = [[i, j]]
      let islandSize = 0
  /*
  These coordinates correspond to the four 
  orthogonal changes from the current position
  */
      const directions = [[-1,0], [1,0], [0,1], [0,-1]]
  
      while (stack.length > 0){
        const tile = stack.pop()
        islandSize++
  /*
  For each of the four orthogonal directions, 
  get the row and column index the change corresponds 
  to and evaluate that tile.
  */
        for (const dir of directions){
          let nextRow = tile[0] + dir[0]
          let nextCol = tile[1] + dir[1]
          if ( grid[nextRow] && grid[nextRow][nextCol] && grid[nextRow][nextCol] === 1 ){
  /*
  If the tile is part of the grid, and its a land tile, 
  we will change its value so that it doesn't get re-counted, and add these coordinates to the stack.
  */
            grid[nextRow][nextCol] = 3
            stack.push([nextRow, nextCol])
          }
        }
      }
      return islandSize
    }
  
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[0].length; j++){
        if (grid[i][j] === 1){
  /* 
  We found the starting point for our island, mark this point as visited, 
  and then begin scanning the island. 
  The returned size will be compared to the current maxArea to 
  determine which is greater and update the value of maxArea if needed.
  */
          grid[i][j] = 3
          maxArea = Math.max(maxArea, mapIsland(i, j))
        }
      }
    }
    return maxArea
  };

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]];

maxAreaOfIsland(grid);