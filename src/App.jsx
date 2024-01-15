import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Watch from "./pages/watch/Watch";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import "./app.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
      </Routes>
    </>
  );
};

export default App;
