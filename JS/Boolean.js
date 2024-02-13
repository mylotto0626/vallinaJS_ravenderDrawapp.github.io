// **Null** : 변수 선언하고 빈 값을 할당한 상태. 의도적으로 변수에 값이 없다는 것을 명시할 때 사용

// **NaN** : Not a Number. 연산 시 숫자와 숫자가 아닌 것을 연산했을 때  숫자가 아님을 표시

// **Undefined** : 변수 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가짐. 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환

//boolean : true & false
const isTrue = true;
const nullValue = null;
let something;

console.log('isTrue: ', isTrue); //true
console.log('nullValue: ', nullValue); //null
console.log('something: ', something); //undefined

