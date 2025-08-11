import { useState } from "react";

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

function useInput(){
  // javaScript 함수에서 useState를 호출하면 오류남 
  // -> 함수 이름 앞에 use 붙여주면 됨, 그럼 커스텀 훅으로 인식해서 오류안남

  const [input, setInput] = useState("");


  const onChange = (e) => {
    setInput(e.target.value);
  }

  return[input, onChange];
}

const HookExam = () => {

  const[input, onChange] = useInput();
 

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;