import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignUp,
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
import LoginPage from "./components/(auth)/Login";
import Navbar from "./components/Navbar/navbar";
import "@radix-ui/themes/styles.css";
import Footer from "./components/Footer/footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
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
      <Footer />
    </>
  );
};

export default App;
