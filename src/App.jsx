import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import "./App.css";
import NavScrollExample from "./Component/Navbar";
import Section from "./Component/Section";
import Cart from "./Pages/View-detail";
import { useState } from "react";
import View from "./Pages/View-detail";
import Addtocart from "./Pages/Addtocart";
import Wishlist from "./Pages/Wishlist ";
import Footer from "./Component/Footer";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import Signup from "./Pages/Sign";

function App() {
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <BrowserRouter>
      <NavScrollExample
        search={search}
        setSearch={setSearch}
        category={category}
        setcategory={setcategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Section
              search={search}
              category={category}
              setcategory={setcategory}
            />
          }
        />
        <Route path="/View-details/:id" element={<View />} />
        <Route path="/view-cart" element={<Addtocart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
