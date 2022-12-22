
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
import Header from './components/Header';


function App() {
  return (
    <div>
    <Header/>

    <BrowserRouter>
      <Routes>
        <Route  path="/login" element={<Login/>} exact/>
        <Route  path="/register" element={<Register/>} exact/>
        <Route  path="/registerAddress" element={<RegisterAddress/>} exact/>
        <Route  path="/registerPayment" element={<RegisterPayment/>} exact/>
        <Route  path="/registerSummary" element={<RegisterSummary/>} exact/>
        <Route  path="/" element={<ItemList/>} exact/>
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
