import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { clearCart } from "../features/cartSlice/cartSlice";

const CartPage = () => {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      {carts?.map((val, i) => (
        <div key={i}>
          <img src={val.Image} />
          <h1>{val.title}</h1>
          <p>{val.quantity}</p>
        </div>
      ))}
      {
        carts.length && 
      <button onClick={handle}>Clear Cart</button>

      }
    </div>
  );
};

export default CartPage;
