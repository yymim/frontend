{
  // 타입스크립트 함수

  //! 1. 함수의 선언과 호출
  // 일반적인 함수
  function greet(name: string): string {
    return `Hello, ${name}`;
  }

  console.log(greet("basic"));

  // 화살표 함수
  type arrowGreetType = (name: string) => string;
  const arrowGreet: arrowGreetType = (name) => `Hello, ${name}`;

  console.log(arrowGreet("arrow"));

  //! 2. 선택적 매개변수와 기본 매개변수

  // 선택적 매개변수
  // -> 함수 호출 시 생략 가능
  function select1(name1?: string): string {
    if (name1) {
      return "Hello " + name1;
    } else {
      return "Hello";
    }
  }
  console.log(select1()); // Hello 출력

  // 기본 매개변수
  // -> 함수 호출 시 생략 가능
  // greeting 이 기본 매개변수
  function select2(name2?: string, greeting: string = "hi"): string {
    if (name2) {
      return greeting + " " + name2;
    } else {
      return greeting;
    }
  }
  console.log(select2()); // hi 출력
  console.log(select2("hello")); // hi hello 출력
  console.log(select2("hello", "hmh")); // hmh hello 출력

  //! 3. Rest 매개변수
  function sum(...numbers: number[]): number {
    // reduce 메소드(reducer 함수) : 네 개의 매개변수를 가질 수 있음.
    // 누적 계산의 결과값 : accumulator
    // 처리할 현재 요소 : currentValue
    // (선택사항) 처리할 현재 요소의 인덱스
    // (선택사항) reduce를 호출한 배열
    // (선택사항) accumulator의 초기값
    return numbers.reduce((a, b) => a + b, 0); // a += b
  }

  const result1 = sum(1, 2, 3, 4, 5);
  console.log(result1);
  const result2 = sum(10, 20, 30);
  console.log(result2);
  const result3 = sum(3, 56, 10, 64, 80, 25, 67, 13, 94); // 갯수를 지정하지 않았기 때문에 임의대로 작성 가능
  console.log(result3);

  function greetEveryone1(...names: string[]): string {
    // join 메소드
    // : 배열의 모든 요소를 연결하여 하나의 문자열로 생성
    // : 배열 내의 각 요소를 문자열로 변환하고 지정된 구분자(선택사항)로 해당 요소들을 구분하여 결합
    return names.map((name) => `Hello ${name}`).join(", ");
  }

  console.log(greetEveryone1("hmh", "kjs", "bws")); // Hello hmh, Hello kjs, Hello bws

  //?Rest매개변수는 항상 마지막에 위치
  function greetEveryone2(name: string, ...names: string[]): string {
    // join 메소드
    // : 배열의 모든 요소를 연결하여 하나의 문자열로 생성
    // : 배열 내의 각 요소를 문자열로 변환하고 지정된 구분자(선택사항)로 해당 요소들을 구분하여 결합
    return names.map((name) => `Hello ${name}`).join(", ");
  }

  console.log(greetEveryone2("hmh", "kjs", "bws")); // Hello kjs, Hello bws

  //?Rest매개변수 지정 시 타입을 주의하여 지정

  //! 4. 함수의 오버로딩

  // 기본 문법
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;

  function add(a: any, b: any): any {
    // 함수 구현부
    // : 함수의 중괄호는 반드시 하나여야 한다.

    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      // concat() 메서드
      // : 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
      return a.concat(b);
    }
    throw new Error("Invalid arguments");
  }

  console.log(add(1, 2));
  console.log(add("hwang", "minhyeon"));
  // console.log(add(1, 'hello')); error

  // 함수에 대한 다양한 타입의 매개변수를 제공할 수 있도록 지정
  // 그와 동시에 타입 안정성을 유지
}
