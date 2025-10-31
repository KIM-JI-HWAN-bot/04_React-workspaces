import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import MenuSearchResultList from "./pages/MenuSearchResultList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/menus" element={<Menus />} />
          <Route path="/menus/:id" element={<MenuDetail />} />
          <Route path="/menus/search" element={<MenuSearchResultList />} /> */}
          <Route path="menus">
            <Route index element={<Menus />} />
            <Route path=":id" element={<MenuDetail />} />
            <Route path="search" element={<MenuSearchResultList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
