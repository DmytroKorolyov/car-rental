import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog"
import Favorites from "./pages/Favorites/Favorites"
import Layout from "./components/Layout/Layout"


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
