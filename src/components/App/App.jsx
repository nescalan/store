import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout, ProductList } from "../../containers";
import { Clothes } from "../../pages";
import "./App.scss";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/clothes" element={<Clothes />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
