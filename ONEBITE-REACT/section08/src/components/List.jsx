import './List.css';
import TodoItem from './TotoItem'

const List = ({ todos }) => {
  return (
    <div className='List'>
      <h4>Todo List🌸</h4>
      <input placeholder='검색어를 입력하세요' />
      <div className='todos_wrapper'>
        {/* todos에 배열 메서드인 map 메서드 이용 */}
        {/* {todos.map((todo) => {
          return <div>{todo.content}</div>;
        })}  */}
        {todos.map((todo) => {
          return <TodoItem {...todo} />;
        })} 
      </div>
    </div>
  );
}

export default List;