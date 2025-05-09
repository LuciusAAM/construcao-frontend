import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Error404 from "./pages/Error404";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />

          <Route path="*" element={<Error404 />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
