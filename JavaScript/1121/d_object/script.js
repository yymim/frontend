let variable = 1;
variable = 'one';
variable = 'true';


//  배열
let a = [];
a.sample = 10;

console.log(a.sample);

// 함수
function b () {

}

b.sample = 10;
console.log(b.sample);

console.log(typeof a); // 'object' 출력
console.log(typeof b); // 'function' 출력

// Array.isArray(배열명)
console.log(Array.isArray(a)); // true



// 기본 자료형을 객체로 선언

// new Number, new String, new Boolean
const f = new Number(273);
const g = Number(273);
console.log(typeof f); // 'object' 출력
console.log(typeof g); // 'number' 출력
f.sample = 10;
console.log(f.sample); // '10'출력

// 객체 그 자체를 출력할 경우 객체 형태로 출력
console.log(f); // 'Number {273, sample: 10}' 출력

console.log(f + 1); // '274' 출력
console.log(f.valueOf()); // '273' 출력



// Number 타입에 sample이라는 속성을 추가
Number.prototype.sample = 10;

const i = 273;
console.log(i.sample); // 10

// 제곱연산자 ** : 숫자를 n제곱
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

// 프로토타입으로 숫자 메소드 추가
// power() 메소드 추가
Number.prototype.power = function(n = 2) {
  return this.valueOf() ** n;
}

// Number 객체의 power() 메소드를 사용
const num = 3;
console.log(num.power()); // 9
console.log(num.power(3)); // 27
console.log(num.power(4)); // 81

// valueOf() 메소드

// indexOf() : 문
const j = '안녕하세요';
console.log(j.indexOf('안녕')); // 0
console.log(j.indexOf('하세')); // 2
console.log(j.indexOf('없는 문자열')); // -1

const k = [1, 2, 3];
console.log(k.indexOf(2)); // 1
console.log(k.indexOf(1)); // 0
console.log(k.indexOf(4)); // -1

// contain() 메소드 추가
String.prototype.contain = function() {
  return this.indexOf(data) >= 0;
}

Array.prototype.contain = function(data) {
  return this.indexOf(data) >= 0;
}

// const j = '안녕하세요';
console.log(j.contain('안녕')); // true

// const k = [1, 2, 3];
console.log(k.contain(4)); // false