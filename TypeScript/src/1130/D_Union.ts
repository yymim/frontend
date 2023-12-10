/// 개중요

// type UnionType = Type1 | Type2 | Type3 ...;

type Any = string | number | boolean | string[] ;

let value: Any = '문자';
value = 123;
value = true;
value = ['1',  '2'];




///////
type Admin = {
  id: string;
  password: number;
}

type User = {
  id: string | number;
  name: string;
}

// 타입 별칭의 Union 타입의 경우
// 중복되지 않은 타입 속성은 옵셔널(물음표)과 동일함.
type Person = User | Admin;
/*
  type Person = {
    id: string;
    password: number;
    name?: string;
  }
*/

let minHyeon: Person = {
  id: '123',
  password: 123,
  name: 'test'
}

function printId(id: string | number) {
  console.log("ID: ", id);
}
console.log("ID: ", minHyeon.id);



/// Union 타입 실습

// type UnionType = number | string;

// function getAge(age: UnionType) {
//   age.toFixed()
// }
// -> Error : uniontype 형식에 toFixed 속성이 없음

type UnionType = number | string;

function getAge(age: UnionType) {
  // 타입가드의 경우 연산자를 사용하여 지정 가능
  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  }

  if (typeof age === 'string') {
    return age;
  }
}
console.log(getAge(12.345));
console.log(getAge('12살'));