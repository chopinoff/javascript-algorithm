# JS Learning Notes

## `for`, `for in`, `for of`

```js
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++>) {
    console.log(arr[i])
}

for (idx in arr) {
    console.log(idx); // 0 1 2
}

for (num of arr) {
    console.log(num); // 10 20 30
}
```

### 배열 탐색과 `for`, `for of`

-   `for of`로 배열의 원소를 직접 탐색하는 것보다 `for`을 사용해 인덱스로 탐색하는 것이 더 효율적이다.

## at()

-   배열의 마지막 원소를 찾을 때 유용

```js
const arr = [a, b, c];
console.log(arr.at(-1)); // c
```
