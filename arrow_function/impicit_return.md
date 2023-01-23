## impicit return

한줄에 적으면 return키워드가 없어도 return된다.

```javascript
const fruits = ["apples", "grapes", "bananas"];

// 기존 표현식
const oldFruits = fruits.map(function (item) {
  return item + "👍";
});

// 축약 표현식
const newFruits = fruits.map((item) => item + "👍");

//출력 값은 동일
console.log(oldFruits); //(3) ["apples👍", "grapes👍", "bananas👍"]
console.log(newFruits); //(3) ["apples👍", "grapes👍", "bananas👍"]
```
