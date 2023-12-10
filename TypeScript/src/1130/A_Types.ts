{
  // 타입스크립트의 타입 명시 방법
  // : 필수 사항 X
  // : 프로그램의 안정성과 가독성을 높이는 중요한 역할

  // 타입 어노테이션(Type Annotation)
  // : 콜론을 이용하여 JS 코드에 타입을 정의하는 방식

  //? 기본 타입(string, number, boolean 등)
  // : 변수명 뒤에 콜론을 첨부하고 타입 명시


  let age: Number = 28;
  let name: string = '황민현';
  let isStudent: boolean = false;





  // Array

  let list1: number[] = [1, 2, 3];
  // let list11: string[] = [1, 2, 3]; // 오류
  // let list12: string[] = ['1', '2', '3']; // ㄱㅊ
  let list2: Array<number> = [4, 5, 6];


  // Tuple
  const nameAndHeight: [string, number] = ['황민현', 183];

  nameAndHeight.push(1);
  console.log(nameAndHeight);

  // void

  /*
    function voidType(parameter) {
      return 1 + 1;
    }
    --> 오류
  */

  /*
    function voidType(parameter) {
      return parameter + parameter;
    }
    --> 오류
  */

  function voidType(parameter: number): number { 
    // 함수의 타입 정의
    // 파라미터와 반환값 정의가 가능
    return parameter + parameter;

    /*
      --> function voidType: 이 부분은 함수의 선언을 시작합니다. 함수의 이름은 voidType입니다.

          (parameter: number): 함수는 number 타입의 매개변수를 받습니다. 이 매개변수는 parameter라는 이름을 가집니다.

          : number: 함수는 number 타입을 반환합니다. 이는 함수가 호출된 후에 예상되는 결과의 타입을 나타냅니다.

          함수의 본문 {}: 이 부분에는 함수가 실행될 때 수행되는 코드가 포함되어 있습니다. 여기서는 매개변수 parameter를 두 번 더한 값을 return 키워드를 사용하여 반환합니다.
    */
  }

  console.log(voidType(3));

  /*
    function voidType2(parameter: number): void {
      //  반환 값이 없을때는 void 씀
      console.log('반환값이 없는 함수');
      return; // 'undefined'가 출력
    }
    
    console.log(voidType2(3));
  */


  // null
  let undefinedType: undefined = undefined;
  // let undefinedType = 1; - Error
  // let undefinedType = true; - Error
  let nullType: null = null;
  // let nullType = '널 타입'; - Error

  // null과 undefined는 모든 타입의 하위 타입이기 때문에 두 타입은 모든 타입에 할당 가능

  let nullNumber: number = 1;
  // nullNumber = null; -> 엄격한 null검사로 인한 오류



  // any
  let anyType: any = 3;
  anyType = '문자';
  anyType = true;
  anyType = {};
  
  // noImplicitAny


  ////////////////////////-- 참고사항 --//////////////////////////////////////

    // never
    function error(message: string): never {
      throw new Error(message);
    }
    // error('에러입니다.');


    // bigint
    // const oneHundred: bigint = BigInt(100);


    // Symbol
    const reference = Symbol('name'); // reference에 name이라는 설명을 가진 심볼을 생성
    const symbol1 = reference;
    const symbol2 = reference;

    if (symbol1 === symbol2) {
      console.log(symbol1);
    }

  
  ////////////////////////-- 참고사항 --//////////////////////////////////////
}