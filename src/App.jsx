import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordStepOne from "./pages/PasswordStepOne";
import PasswordStepTwo from "./pages/PasswordStepTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordStepOne />} />
        <Route path="/step-two" element={<PasswordStepTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
