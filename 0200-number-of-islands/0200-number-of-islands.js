/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let isLandCount = 0;
    function bfs(row, col) {
        const queue = [[row, col]];
        grid[row][col] = "0"; // 방문 표시
        const directions = [[0,1], [0, -1], [1, 0], [-1, 0]];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            for (const [rowDirection, colDirection] of directions ) {
                const nextRow = currentRow + rowDirection;
                const nextCol = currentCol + colDirection;

                // 범위 안에 있고 && 땅이면
                if (nextRow >= 0 && nextRow < grid.length &&
nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] === "1") {
                    grid[nextRow][nextCol] = "0";
                    queue.push([nextRow, nextCol]);
                }
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                isLandCount++;
                bfs(row, col);
            }   
        }
    }
    return isLandCount;
};