import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import styled from "styled-components";
import img from "../../assets/img1.png";
import Loader from "../Loader";

const Products = () => {
  const { products, loading } = useSelector((state) => state.product);
  const [message, setMessage] = useState("");
  console.log(products);
  const _products = products?.products_docs;
  console.log(_products);
  const dispatch = useDispatch();
  console.log(message);

  useEffect(() => {
    dispatch(fetchProduct(setMessage));
  }, []);
  return (
    <Main>
      <div className="message">
        {message ? (
          <div>
            <div className="img-for-noservice">
              <img src={img} className="img1" />
            </div>
            <p>{message}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <h3>Products For You</h3>
    <div className="products">
    {loading ? (
        <Loader />
      ) : (        
          _products?.map((product) => (
          <Product {...product} />
          ))
      )}
    </div>
    </Main>
  );
};

export default Products;

const Main = styled.div`
  width: 100%;
  .message {
    padding: 30px 0px;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
  }
  .img-for-noservice {
    width: 80%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
    grid-template-columns: 1fr;
    }
  }
`;
