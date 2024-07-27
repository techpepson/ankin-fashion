import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp, Sidebar, AddProduct } from "./components/component-export";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
};

export default App;
