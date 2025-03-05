import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListEvent from "./pages/listEvents";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/events" element={<ListEvent/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
