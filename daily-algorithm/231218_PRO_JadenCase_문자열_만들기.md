## 1차 제출 코드

-   `split(' ')`으로 분리했을 때 주어진 문자열 마지막에 공백이 있는 경우를 통과하지 못해 모든 문자열을 낱개의 문자로 분리했습니다.

    ```js
    function solution(s) {
        const temp = s.split(''); // 문자열을 낱개의 문자로 분리
        const answer = temp
            .map((ss, idx) => {
                const res =
                    ss === ' ' // 문자가 공백이면 공백 유지
                        ? ' '
                        : // 공백이 아닌 경우
                        temp[idx - 1] === ' ' || idx === 0 // 직전 문자가 공백이거나 index가 0이면 대문자로 변환
                        ? ss.toUpperCase()
                        : ss.toLowerCase(); // 그 외의 경우 소문자로 변환
                return res;
            })
            .join('');
        return answer;
    }
    ```

-   테스트는 통과했지만 코드가 다소 복잡하고 가독성이 떨어졌습니다.
-   문자열을 분리하지 않은 상태로 조건에 맞는 문자만 찾아 대체할 수 있는 방법은 없을지 생각해봤습니다. > `replace` 사용

## 최종 제출 코드

-   주어진 문자를 모두 소문자로 변환한 후, `replace`에 대문자 변환 조건을 지정하기 위해 정규 표현식을 사용했습니다.
    -   조건 : 바로 앞에 공백을 둔 알파벳
    -   `new RegExp(/\s[a-zA-Z]/, 'gi')` : 앞에 공백(`\s`)이 붙은 문자열, 모든 범위에 대해(`g`) 대소문자 구분 없이(`i`) 탐색
-   `replace`의 조건에 해당하는 문자를 대문자로 변환하기 위해 `replacer`라는 함수를 생성했습니다.

```js
function solution(s) {
    const sToLower = ' ' + s.toLowerCase(); // 모두 소문자로 변환, regexUpper 조건을 위해 맨 앞에 공백 추가
    const regexUpper = new RegExp(/\s[a-zA-Z]/, 'gi'); // 바로 앞에 공백을 둔 알파벳을 찾는 정규 표현식
    const replacer = (ss) => ss.toUpperCase(); // 대문자로 변환하는 함수
    const answer = sToLower.replace(regexUpper, replacer).slice(1); // regexUpper의 조건에 해당하면 replacer로 변환한 값으로 대체
    return answer;
}
```

## 시간 복잡도

-   `' ' + s.toLowerCase()`에서 문자열 합칠 때 O(n), 소문자로 변환할 때 O(n) : O(n) + O(n) = O(n)
-   `replace()`로 문자열 대체할 때 O(n), `.slice()`로 첫 공백 자를 때 O(n) : O(n) + O(n) = O(n)
-   ∴ **O(n)**

## 느낀점

-   정규 표현식 문법이 생각나지 않아서 다시 찾아봐야 했다. 특별한 장점을 발견하지 못해서 실전에서 쓸 일은 없을 것 같은 느낌...
