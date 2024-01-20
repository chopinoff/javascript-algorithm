function solution(phoneBook) {
    phoneBook.sort((a, b) => a.length - b.length);
    console.log(phoneBook);
    let map = new Map(),
        s = 0;
    while (s < phoneBook.length) {
        let len = phoneBook[s].length;
        console.log(len);
        for (let e = s; e < phoneBook.length; e++) {
            if (len !== phoneBook[e].length) {
                for (let i = s; i < e; i++) {
                    map.set(phoneBook[i], 0);
                }
                s = e;
                break;
            } else {
                console.log(
                    phoneBook[e],
                    map.entries(),
                    phoneBook[e].slice(0, len)
                );
                if (map.has(phoneBook[e].slice(0, len))) return false;
                else if (e === phoneBook.length - 1) return true;
            }
        }
    }
}

solution(['119', '1234', '11900']);
