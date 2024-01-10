import { Routes, Route } from "react-router-dom";
// 파일명을 index로 지정하는 경우
// : 해당 파일이 존재하는 디렉토리(폴더)의 기본(메인) 파일임을 파일명으로 알려줌.
import Index1219 from "./views/1219";
import Index1221 from "./views/1221";
import Index1222 from "./views/1222";
import Index1226 from "./views/1226";
import Index1228 from "./views/1228";
import Index1229 from "./views/1229/react";
import Index0102 from "./views/0102";
import Index0104 from "./views/0104";
import Indexgsaptest from "./views/gsap_test";
import Index0109 from "./views/0109";

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
        <Route path="/1226" element={<Index1226 />}></Route>
        <Route path="/1228" element={<Index1228 />}></Route>
        <Route path="/1229" element={<Index1229 />}></Route>
        <Route path="/0102" element={<Index0102 />}></Route>
        <Route path="/0104" element={<Index0104 />}></Route>
        <Route path="/gsap_test" element={<Indexgsaptest />}></Route>
        <Route path="/0109" element={<Index0109 />}></Route>
      </Routes>
    </>
  );
}

export default App;
