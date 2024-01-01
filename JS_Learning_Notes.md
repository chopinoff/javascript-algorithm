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
