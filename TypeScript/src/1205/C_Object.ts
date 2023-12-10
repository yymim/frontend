{
  //! 객체 타입

  // 오브젝트 '리터럴'
  // : 실제 객체 데이터 정의
  // : 구분자로 쉼표(,)만 사용 가능
  // : 객체 이름을 소문자로 시작

  // 객체 타입 정의
  // : 구분자로 쉼표 뿐만 아니라 세미콜론(;)도 사용 가능
  // : 타입 이름 정의

  // const user: {
  //   name: string;
  //   weight: number;
  // } = {
  //   name: "김종성",
  //   weight: 98,
  // };

  type UserType = {
    name?: string; // 선택적 속성
    readonly weight: number; // 읽기 전용 속성
  };
  const user: UserType = {
    name: "김종성",
    weight: 98,
  };

  console.log(user.name);
  console.log(user.weight);
  console.log(user["weight"]);

  //? 덕 타이핑

  type Person = {
    name: string;
    age: number;
  };

  function greet(person: Person) {
    console.log(`Name: ${person.name} / Age: ${person.age}`);
  }

  // Person타입이 명시적으로 구현되지 않은 객체 생성
  const minhyeon = { name: "minhyeon", age: 28 }; // Person과 구조가 같기 때문에 Person으로 취급
  const wooseock = { name: "wooseock", age: 32, job: "actor" }; // 정상작동 -> job 속성을 무시한 채로 Person으로 취급
  const jongsung = { name: "jongsung" };

  // 함수 호출
  greet(minhyeon);
  greet(wooseock);
  // greet(jongsung); // ->Person 타입 속성의 구조와 일치하지 않음 (age 속성 누락)

  // 중첩된 객체 타입
  // 사용자 프로필과 주소 정보를 포함하는 중첩된 객체 타입을 정의
  type Address = {
    street: string;
    city?: string;
    zipCode: string;
  };

  type UserProfile = {
    username: string;
    email: string;
    //address: Address;
    address?: Address; // -> 중첩된 객체 속성을 옵셔널 하는 경우 : 해당 객체를 생략하는 경우를 대비하여 오류를 발생
  };

  let userA: UserProfile = {
    username: "황민현",
    email: "test@domain.com",
    address: {
      street: "123 St",
      // city: "Busan", -> 옵션값으로 부여하면 생략해도 오류X
      zipCode: "12345",
    },
    // -> 하나라도 생략하면 오류남
  };

  console.log(userA.username);
  // console.log(userA.address.city);
  // console.log(userA.address.street); // address가 옵셔널일 경우 조건문을 사용해서 오류 방지
  // 바로 위에서 말한 조건문
  function isAddress(user: UserProfile) {
    if (user.address) {
      console.log(user.address.street);
    }
  }
  isAddress(userA);

  //! 4. 객체의 인덱스 서명

  // 사용법
  type UserRecord = {
    // [propertyName: indexType]: valueType;
    // 속성을 명시적으로 지정해놓지 않음
    [key: string]: string; // -> 문자열 키를 가지며, 각 키의 값도 문자열 타입으로 지정되어야 한다.
  };
  let users: UserRecord = {
    name: "HMH",
    // age: 28, -> error
    age: "28",
    true: "true",
    // 추가적인 사용자의 속성을 지정 가능
    test: "test", // 이것도 됨
  };

  users["firstName"] = "Hwang"; // 동적으로 객체 속성 추가
  console.log(users.firstName);
}
