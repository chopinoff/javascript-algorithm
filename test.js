function solution(numbers) {
    const newNums = numbers.map((n) => String(n));
    const sortNums = (a, b) => {
        const n = Math.min(a.length, b.length);
        for (let i = 0; i < n; i++) {
            if (a[i] !== b[i]) return b[i] - a[i];
        }
        console.log(a[n], b[n], a[0], a.length, b.length);
        return a[n] || b[n] > a[0] ? b.length - a.length : a.length - b.length;
    };
    newNums.sort((a, b) => sortNums(a, b));
    return newNums.join('');
}

console.log(solution([3, 30, 34]));
