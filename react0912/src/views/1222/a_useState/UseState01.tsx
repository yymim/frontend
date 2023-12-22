import React, { useState } from "react";

//! 컴포넌트 단위의 상태 관리
// : React의 Hook 중 하나, 가변적인 상태

//? useState의 상태와 렌더링의 관계

export default function UseState01() {
  // count: 현재 상태 값
  // setCount: 상태를 업데이트하는 함수
  // (0): 상태의 초기값
  const [count, setCount] = useState<number>(0);

  const handelClick = () => {
    // 상태를 1 증가 (업데이트)

    //^ 상태 설정 함수를 그대로 사용
    // : 이전 상태를 직접 참조
    setCount(count + 1);

    // 해당 시점에서는 이전 값이 출력(될 수 있음)
    // : React는 성능 최적화를 위해 여러 상태 변경을 한꺼번에 처리, 하나의 렌더링 사이클에서 일어날 수 있도록 설정
    console.log(count);

    //^ 함수형 업데이트
    // 이전 상태 값을 기반으로 상태를 업데이트 할 때는 함수형 업데이트를 사용하는 것을 권장
    // : 상태 업데이트 함수에 '최신 상태 값'을 자동으로 전달

    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h5 style={{ backgroundColor: 'black',color: 'white' }}>useState 최신 상태 정리</h5>
      <p>You clicked {count} times</p>
      <button onClick={handelClick}>Click Me</button>
      {/* <button onClick={() => setCount(count + 1)}>Click Me2</button> */}
    </div>
  );
}
