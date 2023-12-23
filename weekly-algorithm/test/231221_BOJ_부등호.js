const fs = require('fs');
const path = './weekly-algorithm/test/231221_BOJ_부등호.txt';

const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 최대, 최소의 정렬 방법은 동일, 시작 배열을 다르게 설정
    const n = parseInt(input[0]);
    const sign = input[1].split(' ').map((s) => (s === '>' ? true : false));
    const minArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, n + 1);
    const maxArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].slice(0, n + 1);
    const sortArr = (arr) => {
        for (let i = 0; i < sign.length; i++) {
            const num = arr[i + 1];
            for (let x = i; x >= 0; x--) {
                if (arr[x] > num !== sign[x]) {
                    arr[x + 1] = arr[x];
                    arr[x] = num;
                } else break;
            }
        }
        return arr.join('');
    };
    console.log(sortArr(maxArr));
    console.log(sortArr(minArr));
    process.exit();
});
