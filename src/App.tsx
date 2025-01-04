import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/ui/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
