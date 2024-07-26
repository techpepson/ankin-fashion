import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/component-export";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
