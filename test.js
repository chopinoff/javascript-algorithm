function solution(n, t, m, p) {
    let cnt = 0,
        num = 0,
        temp = '',
        ans = new Array();

    while (t > 0) {
        if (temp.length >= m) {
            ans.push(temp[p - 1]);
            // console.log(temp);
            temp = temp.slice(m);
            console.log(temp, 'slice');
            t--;
        } else {
            temp += num.toString(n);
            console.log(temp, 'else');
        }
        num++;
    }

    return ans.join('').toUpperCase();
}

console.log(solution(16, 16, 2, 1));
