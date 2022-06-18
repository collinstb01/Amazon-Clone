import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/Navbar";
import OneCartitem from "../components/OneCartItem/OneCartitem";
import { clearCart } from "../features/cartSlice/cartSlice";
import img from "../assets/cart1.png";
import SubTotal from "../components/SubTotal";
import { Button } from "react-bootstrap";

const CartPage = () => {
  const { carts, totalPricee } = useSelector((state) => state.cart);
  const [id, setid] = useState("");
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(clearCart());
  };

  const val2 = carts.map((val) => val.id);

  return (
    <Main>
      <Navbar />
      <div className=" main">
        <div className="left">
          {!carts.length && (
            <div className="empty-crat">
              <img src={img} />
              <h5>Please Add Something To Cart</h5>
            </div>
          )}
          {carts?.map((val, i) => (
            <OneCartitem {...val} />
          ))}
          <h1>{totalPricee}</h1>
          {carts.length > 0 && (
            <Button className="clear-cart" variant="warning" onClick={handle}>
              Clear Cart
            </Button>
          )}
        </div>
        <div>
          <SubTotal />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default CartPage;

const Main = styled.div`
  width: 100%;
  height: auto;

  .empty-crat {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 250px;
    }
  }
  .main {
    display: grid;
    grid-template-columns: 75% 25%;

    @media (max-width: 900px) {
      grid-template-columns: 100%;
    }
  }
  .left {
    width: 100%;
  }
  .clear-cart {
    width: inherit;
    color: white;
  }
`;
