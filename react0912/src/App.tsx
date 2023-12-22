import { Routes, Route } from "react-router-dom";
// 파일명을 index로 지정하는 경우
// : 해당 파일이 존재하는 디렉토리(폴더)의 기본(메인) 파일임을 파일명으로 알려줌.
import Index1219 from "./views/1219";
import Index1221 from "./views/1221";
import Index1222 from "./views/1222";

function App() {
  return (
    <>
      <Routes>
        {/*
          npm run start의 제일 첫번째 렌더링 페이지의 경우
          경로를 "/" 전달
        */}
        {/*
          <Route path="/" element={<렌더링 할 페이지 />}></Route>
        */}
        {/* 
          npm run start
          기본 경로 - localhost: 3000
          Route의 path속성으로 지정된 경로로 element가 렌더링
        */}
        <Route path="/1219" element={<Index1219 />}></Route>
        <Route path="/1221" element={<Index1221 />}></Route>
        <Route path="/1222" element={<Index1222 />}></Route>
      </Routes>
    </>
  );
}

export default App;
