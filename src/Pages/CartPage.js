import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/Navbar";
import OneCartitem from "../components/OneCartItem/OneCartitem";
import { clearCart, fetchUserProducts } from "../features/cartSlice/cartSlice";
import img from "../assets/cart1.png";
import SubTotal from "../components/SubTotal";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const { carts, totalPricee,message } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(message);
  const user = localStorage.getItem("profile");
  const handle = () => {
    if (user) {
     // return dispatch(deleteAll({ userId: id }));
    }
    dispatch(clearCart());
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(fetchUserProducts(id));
  }, [id, dispatch, message]);
  const length = (carts.length && carts?.userProduct?.length) == 0;
  return (
    <Main>
      <Navbar />
      <div className=" main">
        <div className="left">
          {length ? (
            <div className="empty-crat">
              <img src={img} />
              <h5>Please Add Something To Cart</h5>
            </div>
          ) : (
            ""
          )}
          {!user ? (
            <>
              {carts?.map((val, i) => (
                <OneCartitem {...val} key={i} />
              ))}
            </>
          ) : (
            <>
              {carts?.userProduct?.map((val, i) => (
                <OneCartitem {...val} user={user} key={i} />
              ))}
            </>
          )}
          <p>{message && message.message}</p>
          {(carts.length && carts?.userProduct?.length) > 0 && (
            <Button className="clear-cart" variant="warning" onClick={handle}>
              Clear Cart
            </Button>
          )}
        </div>
        <div>
          <SubTotal total={totalPricee} />
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
