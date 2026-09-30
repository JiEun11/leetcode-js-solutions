/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let maxIslandSize = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] !== 1) continue;
            
            grid[row][col] = 0; // 방문 처리
            const stack = [[row, col]];
            let islandSize = 1;

            while (stack.length > 0) {
                const [currentRow, currentCol] = stack.pop();

                for (const [rowDirection, colDirection] of directions) {
                    const nextRow = currentRow + rowDirection;
                    const nextCol = currentCol + colDirection;

                    if (nextRow >= 0 && nextRow < rowCount && nextCol >= 0 && nextCol < colCount && grid[nextRow][nextCol] === 1) {
                        islandSize++;   // land size +1
                        grid[nextRow][nextCol] = 0; // next grid 방문처리
                        stack.push([nextRow, nextCol]);
                    }
                }
            }
            maxIslandSize = Math.max(maxIslandSize, islandSize);

        }
    }
    return maxIslandSize;
};