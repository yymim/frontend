import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // enter 키 누르면 추가 버튼 실행
  const onKeydown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {

    // content 입력하지 않았을 시 저장되지 않음.
    if(content === "") {
      // 입력하지 않고 추가 버튼 클릭 시 focus
      contentRef.current.focus();
      return;
    }

    onCreate(content);

    // 추가 완료 시 input 값 초기화
    setContent('');
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;