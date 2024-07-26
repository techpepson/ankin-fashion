import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp, Sidebar } from "./components/component-export";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  );
};

export default App;
