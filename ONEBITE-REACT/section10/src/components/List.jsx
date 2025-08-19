import './List.css';
import TodoItem from './TodoItem'
import { useState, useMemo } from 'react';

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

  // const getAnalyzedData = () => {

  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount
  //   };
  // };
  
  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

  const { totalCount, doneCount, notDoneCount } =
    useMemo (() => {
      // memo하고싶은 연산
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount
      };
    }, [ /* 의존성배열 : deps */ todos ]);
  


  return (
    <div className='List'>
      <h4>Todo List🌸</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
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