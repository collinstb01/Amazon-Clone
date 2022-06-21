import React from "react";
import styled from "styled-components";
import { addToCart, deleteProduct, removeProduct } from "../../features/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const OneCartitem = ({ Image, title, price, id, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const handle2 = () => {
    console.log(id);
    dispatch(deleteProduct(id));
  };
  const inc = () => {
    dispatch(
      addToCart({
       id: id,
        title: title,
        Image: Image,
        price: price,
      })
    );
  };
  const dec = () => {
    dispatch(removeProduct({ id, price, quantity, totalPrice }));
  };
  return (
    <Main className="cart">
      <img className="cart__image" src={Image} alt="" />
      <div className="cart__info">
        <p className="cart__title">{title}</p>
        <div>
          <p className="cart__price">
            <span className="increment-buttons">
              <span>
                <Button onClick={inc} variant="secondary" size="sm">
                  +
                </Button>
              </span>{" "}
              <span className="quantity">{quantity}</span>
              <span>
                <Button onClick={dec} variant="secondary" size="sm">
                  -
                </Button>
              </span>{" "}
            </span>
            <span onClick={handle2} className="delete_cart_item">
              Delete
            </span>
          </p>
        </div>
        <h6>Total Price: {totalPrice}$</h6>
      </div>
      <div className="price">
        <h5>
          <small>$</small>
          {price}
        </h5>
      </div>
    </Main>
  );
};

export default OneCartitem;
const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 30%;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  width: 95%;
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 20% 70% 10%;
  }
  .cart__info {
    padding-left: 20px;
  }

  .cart__info > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    padding: 5px;
    border-radius: 5px;
    color: #111;
  }

  .cart__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  .cart__title {
    font-size: 17px;
    font-weight: 800;
  }
  .cart__price {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    .cart {
      flex-direction: column;
      align-items: center;
    }
  }
  .price {
    display: flex;
    justify-content: flex-end;
  }
  .delete_cart_item {
    cursor: pointer;
    padding: 5px;
    box-shadow: inset -2px 0px 3px 0px #cdbcbc;
  }
  .quantity {
    padding: 0px 7px;
    text-align: center;
  }
  .increment-buttons {
    margin-right: 5px;
  }
`;
