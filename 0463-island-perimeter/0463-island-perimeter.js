/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let perimeter = 0;

    const directions = [[1,0], [-1,0], [0, 1], [0, -1]];

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {

            if (grid[row][col] === 1) { // if the land
                for (const [dirRow, dirCol] of directions) {
                    const nextRow = row + dirRow;
                    const nextCol = col + dirCol;

                    if (nextRow < 0 || nextRow >= rowCount || nextCol < 0 || nextCol >= colCount) {
                        perimeter++;
                    }
                    else if (grid[nextRow][nextCol] !== 1) {
                        perimeter++;
                    }

                }
            }
        }
    }
    return perimeter;
};