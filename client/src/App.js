import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import BatchPage from "./components/BatchPage/BatchPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import { AuthHandler } from "./components/Context/authContext";
import { useState } from "react";
function App() {
  const [signUp, setSignUp] = useState(true);
  // console.log(signUp);
  return (
    <BrowserRouter>
      <AuthHandler>
        <Navbar signUp={signUp} setSignUp={setSignUp} />
        <Routes>
          <Route path="/" exact element={<Home signUp={signUp} setSignUp={setSignUp} />} />
          <Route path="/auth" element={<Auth signUp={signUp} setSignUp={setSignUp} />} />
          <Route path="/batch/:id" element={<BatchPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </AuthHandler>
    </BrowserRouter>
  );
}

export default App;
