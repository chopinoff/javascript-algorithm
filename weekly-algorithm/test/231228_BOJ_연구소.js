const fs = require('fs');
const path = './weekly-algorithm/test/231228_BOJ_연구소.txt';

const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [n, m] = input[0];
    let answer = 0;
    const lab = input.slice(1).map((s) => s.split(' ').map(Number));
    let visited = Array.from({ length: m }, () => Array(n).fill(false));
    const [dx, dy] = [
        [0, 0, 1, -1],
        [1, -1, 0, 0],
    ];

    const bfs = () => {
        let cnt = 0;
        for (let v = 0; v < n; v++) {
            for (let w = 0; w < n; w++) {
                if (!visited[v][w] && lab[v][w] === 2) {
                    visited[v][w] = true;
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
                                lab[nx][ny] === 0
                            ) {
                                visited[nx][ny] = true;
                                lab[nx][ny] === 2;
                                queue.push([nx, ny]);
                            }
                        }
                    }
                    cnt++;
                }
            }
        }
        return cnt;
    };

    const dfs = (x, cnt) => {
        if (cnt === 3) {
            bfs();
            visited = Array.from({ length: m }, () => Array(n).fill(false));
        }

        for (let i = x; i < n * m; i++) {
            const [nx, ny] = [i % n, parseInt(i / n)];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && lab[nx][ny] === 0) {
                lab[nx][ny] = 1;
                dfs(i, cnt + 1);
                lab[nx][ny] = 0;
            }
        }
    };

    answer = Math.max(answer, cnt);
    visited = Array.from({ length: m }, () => Array(n).fill(false));

    console.log(answer);
    process.exit();
});
