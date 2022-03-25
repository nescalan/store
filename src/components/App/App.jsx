import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../containers";
import "./App.scss";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
