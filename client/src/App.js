import { Button } from "antd";
import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Register} from "./pages/common/Register/index";
import { Login } from "./pages/common/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />

      </Routes>
      </BrowserRouter>
     <Register/>
    </div>
  );
}

export default App;
