// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Invent from "./Invent";
const Path = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/invent" element={<Invent />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
