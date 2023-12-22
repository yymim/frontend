import React from "react";

export default function JSX02() {
  // 1. 중괄호를 사용한 문자열 전달
  const welcomeAessage = "환영합니다!";

  // 2. 중괄호를 사용한 함수 호출
  const greeting = (name: string) => `안녕하세요 ${name}님`;

  // 3. 중괄호를 사용한 객체 사용
  type UserType = {
    name: string;
    age: number;
  }

  const userInfo: UserType = {
    name: '김종성',
    age: 29
  }

  //? 중괄호를 사용한 속성 지정
  // style 속성 지정 시 - 객체 형식으로 작성
  // 더블 컬리 {{}} 사용
  const divStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '24px',
    padding: '10px'
  }
  const text = "스타일 속성 사용하기"

  return (
    <>
      <hr />
      <div>중괄호를 사용한 문자열 전달 : {welcomeAessage}</div>
      <div>중괄호를 사용한 함수 호출 : {greeting("황민현")}</div>
      <div>
        중괄호를 사용한 객체 사용<br />
        이름: {userInfo.name},
        나이: {userInfo.age}
      </div>
      <hr />
      <div style={divStyle}>{text}</div>
      <div style={{
        border: '2px solid black'
      }}>더블 컬리로 스타일 속성 사용하기</div>
    </>
  );
}
