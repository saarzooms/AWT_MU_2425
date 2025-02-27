import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Aboutus from "./components/Aboutus";
import MasterLayout from "./components/MasterLayout";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MasterLayout />}>
            <Route path="/home" index element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/proddetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
