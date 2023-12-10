{
 
  type GreetFunction = (name: string) => string;

  // 위의 타입 별칭을 사용하는 함수 구현
  const greet: GreetFunction = (name) => {
    return `Hello, ${name}`;
  }

  // 다른 함수에서 동일한 타입 별칭 사용
  const farewell: GreetFunction = (test) => {
    return `Goodbye, ${test}`;
  }

  console.log(greet('변우석'));
  console.log(farewell('류시오'));

}