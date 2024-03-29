//! javascript (ES6) code snippet
// 코드 스니펫

// 연산자(Operator)
// 산술 / 할당 / 비교 / 논리

//! 산술 연산자
// : 수학적 계산을 수행하는데 사용
// 덧셈(+)
// 뺄셈(-)
// 곱셈(*)
// 나눗셈 몫(/)
// 나눗셈 나머지(%)
// 증가(++)
// 감소(--)

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(x++); // x = 10;
console.log(x); // x = 11;

console.log(--x); // x = 10;

// 증감 연산자
// : 숫자에 직접 적용하지 않음
console.log(3 - 1);
//console.log(3++); // SyntaxError

// 후위 연산자
// : x++(변수 뒤에 연산자를 사용)
// : 해당 브라우저 식에서 바로 값을 변화하지 않고
// : 그 다음 해당 변수를 불렀을 때 값을 계산

// 전위 연산자
// : --x (변수 앞에 연산자를 사용)
// : 브라우저가 변수를 먼저 증가/감소 시키고 값을 반환

//! 할당(대입) 연산자
// : 변수에 값을 할당하는데 사용
// 할당(=)
// += -= *= /= %=

let a = 10; // 10을 a에 할당

a += 5; // a = a + 5;
console.log(a); // a = 15;

a -= 2; // a = a - 2;
console.log(a); // a = 13;

a *= 2; // a = a * 2;

a /= 2;

//! 비교 연산자
// : 두 값을 비교하고, 그 결과를 boolean의 값으로 반환
// 동등 (==), 부등 (!=)
// : 값이 동일한지 테스트 (데이터 유형 고려하지 않음)

// 일치 (===), 불일치 (!==)
// : 엄격한 값과 값의 데이터 유형의 완전한 동일성을 모두 테스트

// > < >= <=

let num1 = 10;
let num2 = '10';

console.log(num1 == num2); // true (타입 고려하지 않음)
console.log(num1 != num2); // false

console.log(num1 === num2); // false (타입을 고려함)
console.log(num1 !== num2); // true

//! 논리 연산자
// : boolean 값을 연산하는데 사용
// and(논리곱) : &&
// or(논리합) : ||
// not(부정논리) : !

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!a); // false
console.log(!b); // true

