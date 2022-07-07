import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartItems = () => {
  let total= 0;

  const cartItems= useSelector(state=>state.cart.itemList);
  cartItems.forEach((item) => {
    total += item.totalPrice;

    console.log(item.totalPrice);
  });
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map(item=>(
              <CartItem key={item.id} id={item.id} price={item.price} name={item.name} total={item.totalPrice}quantity={item.quantity}/>
          ))}
          
        </li>
      </ul>
      <div className="total-price">
          <h3>Total: ₹{total}</h3>
          <Link to="/order" className="orderBtn">Place Order</Link>
        </div>{" "} 
    </div>
  );
};

export default CartItems;
