import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ProductPage from "./components/ProductPage/ProductPage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
