const fs = require('fs');
const path = './weekly-algorithm/test/231221_BOJ_스타트와_링크.txt';

const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 팀 조합 : 재귀 함수(DFS)로 구현

    const n = parseInt(input[0]);
    const scores = input.slice(1).map((s) => s.split(' ').map(Number));
    const checkTeam = Array(n).fill(false); // teamA 포함 여부 체크
    let minScoreGap = 10000;
    const combTeam = (x, cnt) => {
        // x : 직전에 teamA에 포함시킨 사람(의 인덱스), cnt : teamA에 포함된 인원 수
        if (cnt == n / 2) {
            // teamA가 완성되었을 때
            const teamA = [];
            const teamB = [];
            for (let i = 0; i < n; i++) {
                if (checkTeam[i] === true) teamA.push(i);
                else teamB.push(i);
            }
            for (let i = 0; i < n / 2; i++) {
                for (let j = i + 1; j < n / 2; j++) {
                    tempGap =
                        scores[teamA[i]][teamA[j]] +
                        scores[teamA[j]][teamA[i]] -
                        scores[teamB[i]][teamB[j]] -
                        scores[teamB[j]][teamB[i]];
                }
            }
            minScoreGap = Math.min(minScoreGap, Math.abs(scoreA - scoreB));
        } else {
            for (let i = x + 1; i < n; i++) {
                checkTeam[i] = true;
                combTeam(i, cnt + 1);
                checkTeam[i] = false;
            }
        }
    };
    combTeam(0, 0);
    console.log(minScoreGap);
    process.exit();
});
