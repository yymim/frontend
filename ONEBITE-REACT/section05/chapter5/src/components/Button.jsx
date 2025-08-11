const Button = ({ text, color = "black", children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onClick={onClickButton()} 로 하지않게 주의!!
      // onMouseEnter={onClickButton} - 마우스오버
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
