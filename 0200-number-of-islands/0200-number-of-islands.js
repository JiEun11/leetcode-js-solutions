/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;

    const rowCount = grid.length;
    const colCount = grid[0].length;
    let isLandCount = 0;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let row = 0 ; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] !== '1') continue; // 바다이거나 이미 방문한 곳이라면

            isLandCount++;  // 새로운 섬 발견

            grid[row][col] = '0';   // 방문 처리
            const stack = [[row, col]];

            while (stack.length !== 0) {
                const [currentRow, currentCol] = stack.pop();

                for (const [dirRow, dirCol] of directions) {
                    const nextRow = currentRow + dirRow;
                    const nextCol = currentCol + dirCol;

                    // 범위 밖이면 스킵 (row, col 둘다 체크)
                    if (nextRow < 0 || nextRow >= rowCount || nextCol < 0 || nextCol >= colCount) {
                        continue;
                    }

                    // 바다이거나 이미 방문했으면 스킵
                    if (grid[nextRow][nextCol] !== '1') {
                        continue;
                    }

                    grid[nextRow][nextCol] = '0';   // 방문처리
                    stack.push([nextRow, nextCol]);
                }
            }
        }
    }
    return isLandCount;
};