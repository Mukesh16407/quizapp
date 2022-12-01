import { Button } from "antd";
import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Register} from "./components/common/Register";
import { Login } from "./components/common/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />

      </Routes>
      </BrowserRouter>
     <Register/>
    </div>
  );
}

export default App;
