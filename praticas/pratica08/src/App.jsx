import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
