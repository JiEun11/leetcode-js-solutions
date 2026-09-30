/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let isLandCount = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] !== "1") continue;

            isLandCount++;
            grid[row][col] = "0"; // 방문 표시
            const stack = [[row, col]];

            while (stack.length > 0) {
                const [currentRow, currentCol] = stack.pop(); 

                for (const [rowDirection, colDirection] of directions) {
                    const nextRow = currentRow + rowDirection;
                    const nextCol = currentCol + colDirection;

                    if (nextRow >= 0 && nextRow < rowCount && nextCol >= 0 && nextCol < colCount && grid[nextRow][nextCol] === "1") {
                        grid[nextRow][nextCol] = "0";   // 다음칸 방문표시
                        stack.push([nextRow, nextCol]);
                    }
                }
            }

        }
    }
     return isLandCount;
};