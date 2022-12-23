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
    <App />
  </React.StrictMode>
);
