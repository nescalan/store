import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../containers";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
