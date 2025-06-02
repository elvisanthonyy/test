import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Profile from "./assets/pages/Profile.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/test/" element={<Home />} />
      <Route path="/test/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
