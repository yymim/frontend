import { Routes, Route } from "react-router-dom";
import Index from "./views/1219";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react" element={<Index />}></Route>
      </Routes>
    </>
  );
}

export default App;
