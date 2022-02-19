//An image is represented by an m x n integer grid image where 
//image[i][j] represents the pixel value of the image.

//You are also given three integers sr, sc, and newColor. 
//You should perform a flood fill on the image starting from the pixel image[sr][sc].

//To perform a flood fill, consider the starting pixel, plus any 
//pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
//plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
//Replace the color of all of the aforementioned pixels with newColor.

//Return the modified image after performing the flood fill.

// explanation 
// https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/

const floodFill = (image, sr, sc, newColor) => {
    //Get the input which needs to be replaced.
    const current = image[sr][sc];
    
    //If the newColor is same as the existing 
    //Then return the original image.
    if(current === newColor){
        return image;
    }
    
    //Other wise call the fill function which will fill in the existing image.
    fill(image, sr, sc, newColor, current);
    
    //Return the image once it is filled
    return image;
};

const fill = (image, sr, sc, newColor, current) => {
    //If row is less than 0
    if(sr < 0){
        return;
    }

    //If column is less than 0
    if(sc < 0){
        return;
    }

    //If row is greater than image length
    if(sr > image.length - 1){
        return;
    }

    //If column is greater than image length
    if(sc > image[sr].length - 1){
        return;
    }

    //If the current pixel is not which needs to be replaced
    if(image[sr][sc] !== current){
        return;
    }
    
     //Update the new color
     image[sr][sc] = newColor;
    
    
     //Fill in all four directions
     //Fill Prev row
     fill(image, sr - 1, sc, newColor, current);

     //Fill Next row
     fill(image, sr + 1, sc, newColor, current);

     //Fill Prev col
     fill(image, sr, sc - 1, newColor, current);

     //Fill next col
     fill(image, sr, sc + 1, newColor, current);
    
}

// explanation of this solution
// https://shareablecode.com/snippets/javascript-solution-for-leetcode-problem-flood-fill-uPe3-mNxd
// var floodFill = function(image, sr, sc, newColor) {
//     var oldColor = image[sr][sc];
    
//     if(newColor == oldColor)
//       return image;
    
//     image[sr][sc] = newColor;
    
//     if(sr > 0 && image[sr - 1][sc] == oldColor)
//       floodFill(image, sr - 1, sc, newColor); //Left
    
//     if(sc > 0 && image[sr][sc - 1] == oldColor)
//       floodFill(image, sr, sc - 1, newColor); //Up
  
//     if(sr < image.length - 1 && image[sr + 1][sc] == oldColor)
//       floodFill(image, sr + 1, sc, newColor); //Down
        
//     if(sc < image[0].length - 1 && image[sr][sc + 1] == oldColor)
//       floodFill(image, sr, sc + 1, newColor); // Right
        
//     return image;
//   };


let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2;
// second example
//let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2;
floodFill(image, sr, sc, newColor);