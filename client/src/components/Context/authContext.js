import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthHandler = ({ children, history }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  const login = async (email, password) => {
    const loginCredential = { email, password };
    try {
      const res = await axios.post("/user/login", loginCredential);
      localStorage.setItem("User_data", JSON.stringify(res.data.data?.user));
      setisLoggedIn(true);
      setUser(res.data.data?.user);
    } catch (err) {
      console.log(err.response?.message);
    }
  };
  const logout = () => {
    setisLoggedIn(false);
    localStorage.removeItem("User_data");
    navigate("/");
  };

  const signUp = async (data) => {
    try {
      const res = await axios.post("/user/signup", data);
      localStorage.setItem("User_data", JSON.stringify(res.data.data?.user));
      setisLoggedIn(true);
      setUser(res.data.data?.user);
    } catch (err) {
      console.log(err.toString());
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("User_data");
    if (user) {
      setisLoggedIn(true);
      setUser(JSON.parse(user));
    }
  }, []);
  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
