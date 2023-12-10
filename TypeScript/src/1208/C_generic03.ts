//! 유니온 타입과 제네릭
{

  interface User {
    name: string;
    age: number;
  }

  // 예시 사용자 데이터
  const users: { [key: number]: User } = {
    1: { name: 'hmh', age: 28 },
    2: { name: 'kjs', age: 25 }
  }

  function updateUser(id: number, changes: Partial<User>) {
    // 업데이트 로직
    const user = users[id];
    if (!user) {
      console.log(`User with id ${id} not found`);
    }

    // 변경 사항 적용
    users[id] = { ...user, ...changes}
  }


}