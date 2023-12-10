//! 유니언 타입, 인터섹션 타입

{
  //? 유니언 타입

  function processInput(
    input: string | number | boolean
  ): string | number | boolean {
    // 유니언 타입 사용 시 타입 제한을 하지 않은 경우에는
    // 유니언 타입으로 지정된 모든 타입에서 중복되는 속성만 사용 가능
    // input.toUooerCase(); -> 해당 속성은 number에서 사용할 수 없기 때문에 오류
    input.toLocaleString;
    input.toString;
    input.valueOf;

    if (typeof input === "string") {
      return input.toUpperCase();
    } else if (typeof input === "number") {
      return input * input;
    } else {
      // -> else if라고  해서 오류났엇음. 그러면  boolean말고 다른 값 있을거라고 해서 오류남. 마지막은 else로!!!!!
      return !input;
    }
  }
  let input1 = "input one";
  let input2 = 2;
  let input3 = false;

  console.log(processInput(input1));
  console.log(processInput(input2));
  console.log(processInput(input3));
}

{
  //? 인터섹션 타입

  type User = {
    name: string;
    age?: number; // 필수 값 X
  };
  type Permissions = {
    readonly role: string;
    permissions: string[];
  };

  // 인터섹션 타입 정의
  type EnhancedUser = User & Permissions;

  let user1: EnhancedUser = {
    name: "변우석",
    // age: 29,
    role: "Actor",
    permissions: ["frontend", "backend"],
  };

  user1 = {
    name: "황민현",
    role: "Artist", // 객체 자체를 새롭게 부여
    permissions: ["hello", "hi"],
  };

  console.log(user1); // -> { name: '황민현', role: 'Artist', permissions: [ 'hello', 'hi' ] } 출력

  // readonly의 읽기 전용 속성은 해당 객체에서
  // readonly로 지정된 속성을 따로 수정하고자 할 때 오류 발생
  // : 객체가 생성된 후에는 이 속성의 값을 변경할 수 X
  // user1.role = 'HR'; - Error

  // user1.role = 'HR'; -> 오류
  // readonly의 읽기 전용 속성은 해당 객체에서 readonly로 지정된 속성을 따로 수정하고자 할 때 오류 발생
  // : 객체가 생성된 후에는 이 속성의 값을 변경할 수 없음
}
