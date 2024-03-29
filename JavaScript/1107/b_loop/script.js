// 자바스크립트의 반복문

//! 반복문(Loops)
// : 동일한 코드 블록을 여러 번 실행할 수 있도록 해주는 프로그래밍의 기본 구조
// : 조건이 만족될 때까지 반복하여 실행할 수 있는 명령의 집합

//! 자바스크립트 반복문의 종류
// for, while, do-while

//! 배열
// : 여러 개의 변수를 한 번에 선언해서 다룰 수 있는 자료형
// : 여러 개의 항목들이 순차적으로 저장된 데이터 구조
// : JS에서 배열은 Array 객체
// : 숫자형 인덱스를 사용해 각 항목에 접근 가능

// 요소 : 배열 내부에 있는 값
// 인덱스 번호 : 0부터 시작
// (인덱스의 끝 번호 == 배열 길이 - 1)

//? 배열 선언
// '변수 | 상수 키워드' 배열명 = [요소1, 요소2, ...];
let fruits = ['apple', 'banana', 'cherry'];

//? 배열 요소에 접근하기
// 배열의 각 요소에는 0부터 시작하는 인덱스를 사용하여 접근
// 배열명[인덱스번호]

console.log(fruits[3]); // cherry

//? 배열 길이 확인
// length 속성을 사용하여 배열의 길이를 확인
// = 배열에 들어있는 항목의 수
// 배열명.length
console.log(fruits.length); // 3

//! 1. for 반복문
// : 코드를 정해진 횟수만큼 반복 실행할 때 사용

// for 반복문의 기본적인 구조
// for (초기화식; 종료 조건; 증감식) {
//    실행할 코드
// }

// 초기화식(Initialization)
// : 반복문이 시작될 때 단 한번만 실행
// : 보통 카운터 변수라고도 불리는 변수를 초기화하는데 사용
// : 보통 숫자로 설정된 변수

//? 종료 조건(Test / Condition)
// : 각 반복 사이클의 시작에서 평가되는 표현식
// : 해당 조건이 true면 코드 블록이 실행
// : , false면 반복문이 종료

//? 증감식(Increment / Decrement)
// : 각 반복 사이클이 끝날 때(반복문이 전체 반복을 거쳤을 때) 마다 실행
// : 일반적으로 카운터 변수를 증가 또는 감소시키는데 사용

// 0부터 4까지의 숫자(정수)를 콘솔창에 출력
for (let index = 0; index < 5; index++) {
  console.log(first);
}

// i는 초기화에서 0으로 시작
// 조건에서 i < 5가 참인 동안 반복문이 계속 실행
// 각 반복 사이클이 끝날 때 마다 i가 1씩 증가

//! 2. while문
// : 주어진 조건이 참인 동안 코드 블럭을 계속 실행

// while 반복문의 기본적이 구조
// while (조건) {
//    실행할 코드
// }

// 조건이 참인 경우 : 무한루프
let index = 0;

while (index < 5) {
  console.log(index);
  index++;
}

//! do-while문
// : while 반복문과 유사
// : , 조건을 확인하기 전에 먼저 코드 블록을 실행
// : 코드 블록이 최소한 한 번은 실행 보장

// do-while문의 기본적인 구조
do {
  // 실행할 코드
} while (조건);
 
// 0부터 4까지 출력
index = 0;
do {
  console.log(index);
  index++;
} while (index < 5);

// 1에서 20까지의 숫자 중에서 3의 배수만 출력하는 코드 (for 반복문, if 조건문 사용)

for (let index = 1; index <= 20; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
}