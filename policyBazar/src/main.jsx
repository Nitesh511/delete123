import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/layout/navbar/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/home/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="" element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
);
