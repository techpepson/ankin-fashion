import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignUp,
  Sidebar,
  AddProduct,
  ListItems,
  WomenItems,
  MenItems,
  KidItems,
  UnisexItems,
  ListUsers,
  ListAllProducts,
  Accessories,
  Home,
} from "./components/component-export";
import Navbar from "./components/Navbar.tsx"
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-1 p-1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/women-items" element={<WomenItems />} />
        <Route path="/men-items" element={<MenItems />} />
        <Route path="/kid-items" element={<KidItems />} />
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/unisex-items" element={<UnisexItems />} />
        <Route path="/all-products" element={<ListAllProducts />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/list-products/:id" element={<ListItems />} />
      </Routes>
    </div>
    
  );
};

export default App;
