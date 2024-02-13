// 1. **Number** : 정수(Integer = 1, 2, 3, 4) , 소수(Float = 1.5 )

//     Number타입은 서로 연산기호를 이용하여 계산할 수 있다. + , - . / ,%

// 2. **String** : 처음부터 끝까지 문자(Text)로 구성되어 있다는 의미

//     "Hello," + " My name is Nico" = Hello, My name is Nico

// **변수 선언법** : 공백이 있으면 안되고 숫자로 시작될 수 없음

// **스네이크 케이스** : 언더바가 들어가 있는 표현 방식. snake_case

// **파스칼 케이스** : 첫글자와 중간 글자가 대문자인 표현 방식. PascalCase

// **카멜 케이스** : 중간 글자만 대문자로 시작함. 첫글자가 소문자일 때 낙타같이 생김


// **const** : 상수. 항상 변하지 않는 값이고 재선언,재할당 불가. 선언 즉시 초기화되어야 함

// **let**  : ES6 부터 추가된 변수 선언 방식으로 재선언 불가능, 재할당 가능

// **var** : 재선언, 재할당 가능 → 에러나기 쉬움 → var 권장 X

const a = 10;
const b = 2;
const myName = 'Summer'

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log('Hello ' + 'Summer');