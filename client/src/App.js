import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import BatchPage from "./components/BatchPage/BatchPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthHandler } from "./components/Context/authContext";
function App() {
  return (
    <BrowserRouter>
      <AuthHandler>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/batch/:id" element={<BatchPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthHandler>
    </BrowserRouter>
  );
}

export default App;
