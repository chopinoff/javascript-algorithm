const fs = require('fs');
const path = './weekly-algorithm/test/231228_BOJ_안전_영역.txt';

const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const n = parseInt(input[0]);
    let answer = 0;
    const land = input.slice(1).map((s) => s.split(' ').map(Number));
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    const [dx, dy] = [
        [0, 0, 1, -1],
        [1, -1, 0, 0],
    ];
    let rain = Math.max(...land.map((row) => Math.max(...row)));
    const bfs = (v, w, r) => {
        const queue = [[v, w]];
        while (queue.length) {
            const [x, y] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < n &&
                    !visited[nx][ny] &&
                    land[nx][ny] > r
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    };

    for (let r = 0; r <= rain; r++) {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!visited[i][j] && land[i][j] > r) {
                    visited[i][j] = true;
                    bfs(i, j, r);
                    cnt++;
                }
            }
        }
        answer = Math.max(answer, cnt);
        visited = Array.from({ length: n }, () => Array(n).fill(false));
    }
    console.log(answer);
    process.exit();
});
