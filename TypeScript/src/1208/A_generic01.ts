{
  // 제네릭

  // 예시 1
  // 제네릭 지정
  function generic<T>(arg: T): T {
    return arg;
  }

  // 제네릭으로 지정된 함수 사용
  let stringOutput = generic<string>('string generic');
  let numberOuput = generic<number>(500);
  console.log(stringOutput);
  console.log(numberOuput);


  // 예시 2
  // 여러 제네릭 타입 변수 지정
  function pair<T, U>(first: T, second: U) {
    return [first, second]
  }

  let pairOutput = pair<string, number>('string type', 40);
  console.log(pairOutput);


  // 예시 3
  // 제네릭 함수
  function genericFunc<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }
  let resultFunc = genericFunc<boolean>([true, false, true]);
  console.log(resultFunc);


  // 예시 4
  // 제네릭 인터페이스
  interface GenericInterface<T> {
    (arg: T): T;
  }

  function identity<T>(arg: T):T {
    return arg;
  }

  let myIdentity: GenericInterface<number> = identity;
  console.log(myIdentity(5));

  // 예시 5
  // 제네릭 클래스
  class GenericClass<T> {
    zeroValue: T;
    add: (x:T, y:T) => T;

    constructor(zeroValue: T, addFunction: (x: T, y:T) => T) {
      this.zeroValue = zeroValue;
      this.add = addFunction;
    }
  }

  let myGenericVar = new GenericClass<number>(0, function(x, y) { return x + y; });
  let myGenericStringVar = new GenericClass<string>('', function(x, y) { return `${x}, ${y}`; })
  console.log(myGenericVar.add(5, 3)); // 8 출력
  console.log(myGenericStringVar.add('hello', 'hi'));
}