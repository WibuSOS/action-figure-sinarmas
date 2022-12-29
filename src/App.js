import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import ItemList from './components/item_list/ItemList';
import Register from './pages/Register/Register';
import Bookmark from './components/bookmark/bookmark';
import ShopingCart from './components/shopingcart/ShopingCart';
import Checkout from './components/checkout/Checkout';
import History from './pages/Transaction'
import Address from './components/address/Address';
import { useEffect } from 'react';
import UserContext, { useStore } from './context/UserContext'
import axios from 'axios'
import { API_URL } from './const';
function MultiRouter() {
  const { state,dispatch } = useStore()
  
  useEffect(()=>{
    
    loadData()
  },[])

  const loadData= async()=>{
		let jumlahCart, jumlahHistory, jumlahBookmark = 0;
		try {
			const res = await axios.get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
			if(res.data.length!==0){
				jumlahCart = res.data[0].details.length
			}
		} catch (err) { }
		try {
			const res = await axios.get(API_URL + "/history?id_person=" + localStorage.getItem("id"))
      jumlahHistory = res.data.length
		} catch (err) { }
		try {
			const res = await axios.get(API_URL + "/bookmark?id_person=" + localStorage.getItem("id"))
			jumlahBookmark = res.data.length
		} catch (err) { }
		dispatch({ type: "setDefault", payload: { bookmark: jumlahBookmark, history: jumlahHistory, cart: jumlahCart } })
	}
  return (
    <Routes>
      {
        state.user == null ?
          (
            <>
              <Route path="/" element={<Login />} exact />
              <Route path="/register" element={<Register />} exact />
            </>
          ) : (
            <>
              <Route path="/" element={<ItemList />} exact />
              <Route path="/bookmark" element={<Bookmark />} exact />
              <Route path="/cart" element={<ShopingCart />} exact />
              <Route path="/checkout" element={<Checkout />} exact />
              <Route path="/history" element={<History />} exact />
              <Route path="/address" element={<Address />} exact />
            </>
          )
      }
    </Routes>
  )
}
function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Header />
        <MultiRouter />
      </BrowserRouter>
    </UserContext>
  )

  // if (localStorage.getItem('name') == null) {
  //   return (
  //     <BrowserRouter>
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<Login />} exact />
  //         <Route path="/register" element={<Register />} exact />
  //         <Route path="/registerAddress" element={<RegisterAddress />} exact />
  //         <Route path="/registerPayment" element={<RegisterPayment />} exact />
  //         <Route path="/registerSummary" element={<RegisterSummary />} exact />
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }
  // else {
  //   return (
  //     <BrowserRouter>
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<ItemList />} exact />
  //         <Route path="/bookmark" element={<Bookmark />} exact />
  //         <Route path="/cart" element={<ShopingCart />} exact />
  //         <Route path="/checkout" element={<Checkout />} exact />
  //         <Route path="/history" element={<History />} exact />
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }
}

export default App;
