import './App.css';
import { useReducer } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

// 초기값 설정 - 객체 모델링
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  }, 
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  }
]

function reduver(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(useReducer, mockData);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/diary/:id' element={<Diary />} />
        {/* "/:id" => URL 파라미터를 사용해줄 것을 명시 */}
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;