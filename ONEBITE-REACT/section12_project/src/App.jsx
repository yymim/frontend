import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Button from './components/Button';

import { getEmotionImage } from './util/get-emotion-image';


// 1. '/' : 모든 일기를 조회하는 Home 페이지
// 2. '/new' : 새로운 일기를 작성하는 페이지
// 3. '/diary' : 일기를 상세히 조회하는 페이지
function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new')
  }

  return (
    <>
    <Button />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary/:id' element={<Diary />} />
      {/* "/:id" => URL 파라미터를 사용해줄 것을 명시 */}
      <Route path='*' element={<Notfound />} />
    </Routes>
    </>
  );
}

export default App;