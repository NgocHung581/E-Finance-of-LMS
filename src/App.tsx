import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import LoginForgetForm from "./components/Login/LoginForgetForm/LoginForgetForm";
import TuitionManagement from "./components/TuitionManagement/TuitionManagement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/password-reset" element={<LoginForgetForm />} />
        <Route path="/list-courses" element={<TuitionManagement />} />
      </Routes>
    </div>
  );
}

export default App;
