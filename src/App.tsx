import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Board from "./pages/Board";
import BoardId from "./pages/BoardId";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/board/:id" element={<BoardId />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
