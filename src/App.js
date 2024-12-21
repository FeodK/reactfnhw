import React from 'react';
import './scss/style.scss';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import CataloguePage from './pages/CataloguePage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
