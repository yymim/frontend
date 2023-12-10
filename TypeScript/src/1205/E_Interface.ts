// 타입스크립트 인터페이스

//! 1. 인터페이스의 정의

//! 2. 인터페이스의 구조
// 타입 명시
type UserType = {
  name: string;
  age: number;
}

// 인터페이스명 지정 시 대문자로 시작
// =(이퀄) 사용하지 않음
// type 속성과 마찬가지로 선택적 프로퍼티와 읽기 전용 프로퍼티 지정 가능
interface UserInterface {
  name?: string;
  readonly age: number;
}

// 인터페이스 사용(구현) 예제
// - employee 객체 선언
let employee: UserInterface = {
  name: 'hmh',
  age: 28
}

// 확장된 인터페이스 예제
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  color: 'blue',
  sideLength: 10
}