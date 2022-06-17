import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchProductforDetails } from "../../features/productSlice/productSlice";
import { useDispatch } from "react-redux";

const arr = []

const SearchProducts = ({
  product_title,
  product_main_image_url,
  original_price,
  app_sale_price_currency,
  app_sale_price,
  product_id,
  evaluate_rate,
  _searchProducts
}) => {

  const rating = evaluate_rate?.charAt()
  // console.log(rating)
  const _rating = parseInt(rating)
  console.log(typeof(_rating));
  // console.log(_rating)
  for (let i =0;i < _rating; i++) {
    arr.push("filled")
  }

  const array = arr.push(_rating)
  // console.log(arr)
  const [id, setid] = useState(product_id)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handle = () => {
    navigate(`/details/${id}`)
  };
  


  return (
    <Main onClick={handle}>
      <div className="right">
        <img src={product_main_image_url} />
      </div>
      <h1>{product_title.slice(0, 40)}...</h1>
      <div>
        <div className="icon+price">
          {
            Array(arr)?.fill()?.map((_, i) => <p key={i}> <AiFillStar className="icon" /></p>)
          }
        </div>
        <span>
          {!original_price ? "No price" : original_price}
        </span>
      </div>
    </Main>
  );
};

export default SearchProducts;

const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0px;
  cursor: pointer;
  background: white;
  box-shadow: 1px 1px 1px whitesmoke;

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width:100%;
    height: 250px;

    img {
      display: flex;
    align-items: center;
    justify-content: center;
      width: 60%;
      height: auto;
    }
  }
  
  .icon+price {
      display: flex;
    }
  .icon {
    color: orange;
  }
  h1 {
    font-size: 20px;
    padding: 0px 10px;
  }
`;
