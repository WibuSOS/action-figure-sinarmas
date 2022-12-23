import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterAddress from './pages/Register/RegisterAddress';
import RegisterPayment from './pages/Register/RegisterPayment';
import RegisterSummary from './pages/Register/RegisterSummary';
import ShopingCart from './components/shopingcart/ShopingCart';
import ItemList from './components/item_list/ItemList';
import Checkout from './components/checkout/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App><ItemList /></App>} exact />
        <Route path="/login" element={<App><Login /></App>} exact />
        <Route path="/register" element={<App><Register /></App>} exact />
        <Route path="/registerAddress" element={<App><RegisterAddress /></App>} exact />
        <Route path="/registerPayment" element={<App><RegisterPayment /></App>} exact />
        <Route path="/registerSummary" element={<App><RegisterSummary /></App>} exact />
        <Route path="/cart" element={<App><ShopingCart /></App>} exact />
        <Route path="/checkout" element={<App><Checkout /></App>} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
