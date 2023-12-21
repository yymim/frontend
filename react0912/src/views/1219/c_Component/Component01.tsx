import React from "react";
import tiger from './img-03.jpg';

// 3. 마크업 추가
function Image() {
  // HTML 코드 내에서 문법 사용 시
  // : 중괄호 내에서 사용

  // 자바스크립트 문법 내에서 HTML 코드 작성 시
  // : 소괄호 내에서 사용
  return (
    <img 
      src={tiger}
      alt="이미지1"
      style={{ width: '100px' }}
    />
  );
}

// 4. 정의된 컴포넌트 사용
export default function Component01() {
  // 마크업이 한 개인 경우 return 키워드와 동일한 줄에 작성 가능
  // return 키워드와 동일한 줄에 없는 경우 반드시 () 소괄호로 감싸야 함.
  return (
    <div>
      <p>이미지 컴포넌트 사용</p>
      <Image />
      <Image />
      <Image />
    </div>
  )
}


