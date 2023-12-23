const fs = require('fs');
const path = './weekly-algorithm/test/231221_BOJ_탑.txt';

const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 수신 가능한 탑 : 스택으로 구현
    const n = parseInt(input[0]);
    const tower = [100000000, ...input[1].split(' ')].map((t) => parseInt(t));
    const stack = [[0, 100000000]]; // [인덱스, 높이] 쌍
    const answer = [];
    for (let i = 1; i <= n; i++) {
        while (stack.length > 0) {
            const temp = stack.pop();
            if (temp[1] >= tower[i]) {
                answer.push(temp[0]);
                stack.push(temp);
                stack.push([i, tower[i]]);
                break;
            }
        }
    }
    console.log(answer.join(' '));
    process.exit();
});
