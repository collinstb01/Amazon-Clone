import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addToCart } from "../../features/cartSlice/cartSlice";

const Product = ({ product_title, product_main_image_url, product_id,app_sale_price }) => {
  const [id, setid] = useState(product_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = () => {
    console.log(product_id);
    navigate(`/details/${id}`);
    setid("");
  };
  
  const handle2 = () => {
    dispatch(addToCart({product_id, product_title, product_main_image_url,app_sale_price }));
    console.log({product_id, product_title, product_main_image_url });
  };

  return (
    <Main>
      <span>instock</span>
      <div className="img-div" onClick={handle}>
        <img src={product_main_image_url} />
      </div>
      <h1>{product_title}</h1>
      <button className="btn" onClick={handle2}>
        Add to Cart
      </button>
    </Main>
  );
};

export default Product;

const Main = styled.div`
  width: auto;
  font-size: 13px;
  padding: 20px 0px;
  box-shadow: -3px 4px 2px whitesmoke;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    border-radius: 5px;
    padding: 5px 8px;
    background-color: gray;
  }
  h1 {
    margin-left: 5px;
    font-size: 13px;
  }

  .img-div {
    width: 100%;
    display: grid;
    place-items: center;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .btn {
    font-size: 12px;
    padding: 4px;
    display: grid;
    place-items: center;
    text-align: center;
    color: white;
    background-color: #cd9042;
  }
`;
