{

//! 타입스크립트의 객체타입
// : 객체 타입 정의 시 {}(중괄호)를 사용하여 표현
// : 객체 타입의 경우 타입끼리의 구분 시 세미콜론(;) 사용을 권장

const user: { 
  name: string;
  height: number;
} = {
  name: '김종성',
  height: 183 
}


//! 객체의 선택 속성(선택적 프로퍼티)

const userNameAndUnKnownHeight: {
  name: string;
  height?: number;
} = {
  name: '황민현',
  height: 187
}

const readonlyName: {
  readonly name: string;
  age: number;
} = {
  name: '변우석',
  age: 32
}

// readonlyName.name = 'Byeon Woo Seok'
// 읽기 전용 속성이므로 'name'에 재할당X

readonlyName.age = 28;
// 재할당 가능

console.log(readonlyName);
}