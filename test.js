function solution(priorities, location) {
    const locations = Array(priorities.length)
        .fill()
        .map((val, idx) => idx);
    let ans = 0;
    let cnt = 0;

    while (priorities.length) {
        const [pri, loc] = [priorities.shift(), locations.shift()];
        cnt += priorities.length;
        if (pri < Math.max(...priorities)) {
            priorities.push(pri);
            locations.push(loc);
        } else {
            ans += 1;
            if (loc === location) return cnt;
        }
    }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
