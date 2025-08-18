import './List.css';
import TodoItem from './TodoItem'
import { useState } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {

  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  };

  const getFilteredData = () => {
    if(search === '') {
      return todos;
    } 
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className='List'>
      <h4>Todo List🌸</h4>
      <input
        value = {search}
        onChange = {onChangeSearch}
        placeholder='검색어를 입력하세요' 
      />
      <div className='todos_wrapper'>
        {/* todos에 배열 메서드인 map 메서드 이용 */}
        {/* {todos.map((todo) => {
          return <div>{todo.content}</div>;
        })}  */}
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })} 
      </div>
    </div>
  );
}

export default List;