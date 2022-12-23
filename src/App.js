import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import ItemList from './components/item_list/ItemList';
import RegisterAddress from './pages/Register/RegisterAddress';
import RegisterPayment from './pages/Register/RegisterPayment';
import RegisterSummary from './pages/Register/RegisterSummary';
import Bookmark from './components/bookmark/bookmark';
import ShopingCart from './components/shopingcart/ShopingCart';
function App(props) {
  if(localStorage.getItem('name')==null)
  {
  return (
 <BrowserRouter>
  <Header/>
          <Routes>
              <Route  path="/" element={<Login/>} exact/>
              <Route  path="/register" element={<Register/>} exact/>
              <Route  path="/registerAddress" element={<RegisterAddress />} exact />
              <Route path="/registerPayment" element={<RegisterPayment />} exact />
              <Route path="/registerSummary" element={<RegisterSummary />} exact />
          </Routes>    
    </BrowserRouter>
  )
  }
  else{
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/" element={<ItemList/>} exact/>
            <Route  path="/bookmark" element={<Bookmark/>} exact/>
            <Route  path="/cart" element={<ShopingCart/>} exact/>
        </Routes>    
      </BrowserRouter>
    )
  }
}

export default App;
