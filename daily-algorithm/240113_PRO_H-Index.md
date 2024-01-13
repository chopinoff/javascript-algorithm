## 문제 링크

[![PRO]][Link]

## 문제 해석

-   h번 이상 인용된 논문이 h편 이상 > 해당 조건을 만족하는 h의 최댓값을 return
-   h의 조건 (인용 횟수, 논문 수) 중 논문 수를 기준으로 삼아서 조건을 탐색함
    -   논문 수는 0부터 n (총 논문 수)까지 고르게 탐색할 수 있음
-   h번 이상 인용된 논문의 개수 파악하기 : 인용 횟수 내림차순으로 정렬해 해당 인덱스를 읽는 방식으로 구현

## 최종 제출 코드

-   주어진 `citations`를 인용 횟수 내림차순으로 정렬합니다.
-   `h`의 최댓값을 찾기 위해 마지막 인덱스부터 역순으로 순회하며 조건을 만족하는 `h`를 `return` 합니다.
-   순회를 모두 마친 후에는 조건을 만족하는 `h`가 없으므로 `0`을 `return` 합니다.

```js
function solution(citations) {
    citations.sort((a, b) => b - a);
    for (let h = citations.length - 1; h >= 0; h--) {
        if (h + 1 <= citations[h]) return h + 1;
    }
    return 0;
}
```

## 시간 복잡도

-   n: `citations`의 길이
-   `citations`를 정렬할 때 O(nlogn)
-   `citations`를 순회할 때 O(n)
-   **∴ O(nlogn)**

<!---------------------------------------------------------------------------->

[PRO]: https://github.com/chopinoff/js-algorithm/assets/107768516/6bb592e8-21d7-4244-91bb-8708f1f8ebb0
[BOJ]: https://github.com/chopinoff/js-algorithm/assets/107768516/ab4a009d-7575-4362-8a74-ebd2476570e4
[Link]: https://school.programmers.co.kr/learn/courses/30/lessons/42747
