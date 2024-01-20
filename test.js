const arr = [1, 2];
console.log(
    arr.reduce((acc, cur) => {
        console.log(cur);
        return acc + cur * 3;
    })
);
