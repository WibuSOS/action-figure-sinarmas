import logo from './logo.svg';
import './App.css';
import ItemList from './components/item_list/ItemList';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import RegisterAddress from './pages/Register/RegisterAddress';
import RegisterPayment from './pages/Register/RegisterPayment';
import RegisterSummary from './pages/Register/RegisterSummary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/login" element={<Login/>} exact/>
        <Route  path="/register" element={<Register/>} exact/>
        <Route  path="/registerAddress" element={<RegisterAddress/>} exact/>
        <Route  path="/registerPayment" element={<RegisterPayment/>} exact/>
        <Route  path="/registerSummary" element={<RegisterSummary/>} exact/>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
