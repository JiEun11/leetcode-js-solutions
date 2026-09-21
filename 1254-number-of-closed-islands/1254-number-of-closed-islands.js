/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let closedCount = 0;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] === 0) {
                let isClosed = true;
                grid[row][col] = 1;
                const stack = [[row, col]];

                // if the start was already 테두리
               if (row === 0 || row === rowCount -1 || col === 0 || col === colCount-1) {
                    isClosed = false;
               }

               while (stack.length !== 0) {
                const [currentRow, currentCol] = stack.pop();

                for (const [dirRow, dirCol] of directions) {
                    const nextRow = currentRow + dirRow;
                    const nextCol = currentCol + dirCol;

                    if (nextRow < 0 || nextRow >= rowCount || nextCol < 0 || nextCol >= colCount) {
                        continue;  // skip the out of grid
                    }
                    if (grid[nextRow][nextCol] !== 0) continue; 

                    if (nextRow === 0 || nextRow === rowCount -1 || nextCol === 0 || nextCol === colCount-1) {
                        isClosed = false;
                    }

                    grid[nextRow][nextCol] = 1;
                    stack.push([nextRow, nextCol]);
                }
               }
               if (isClosed) closedCount++;
            }
        }
    }
    return closedCount;
};