import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./home";
import SignUp from "./signup";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}