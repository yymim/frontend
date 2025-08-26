import './Button.css'

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {/* className을 동적으로 설정 */}
      {text}
    </button>
  );
}

export default Button;