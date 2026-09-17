import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import NavScrollExample from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import View from "./Pages/View-detail";
import Addtocart from "./Pages/Addtocart";
import Wishlist from "./Pages/Wishlist ";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import Signup from "./Pages/Sign";
import Allproduct from "./Component/Allproduct";

function App() {
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState("");

  return (
    <BrowserRouter>
      <NavScrollExample
        search={search}
        setSearch={setSearch}
        category={category}
        setcategory={setcategory}
      />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Home
              search={search}
              category={category}
              setcategory={setcategory}
            />
          }
        />

        {/* All Products Page */}
        <Route
          path="/all-products"
          element={
            <Allproduct
              search={search}
              category={category}
              setcategory={setcategory}
            />
          }
        />

        {/* Product Details */}
        <Route path="/View-details/:id" element={<View />} />

        {/* Cart */}
        <Route path="/view-cart" element={<Addtocart />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
