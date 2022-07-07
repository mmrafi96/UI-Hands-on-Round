import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartItems from './components/cart/CartItems';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Order from './components/order/Order';
import Product from './components/product/Product';
 
function App() {

 
  return (
    <div className="App">
<Header/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
