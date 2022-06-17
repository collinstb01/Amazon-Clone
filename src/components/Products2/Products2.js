import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product2";
import styled from "styled-components";
import Loader from "../Loader";
import NoNetwork from "../NoNetwork";

const Products2 = () => {
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
        {message && (
          <div style={{display: !message ? "none" : "initial"}}>
            < NoNetwork message={message} />
          </div>
        )}
      <h3>Products For You</h3>
    <div className="products">
    {loading ? (
        <Loader />
      ) : (        
          _products?.slice(13, 21).map((product) => (
          <Product {...product} />
          ))
      )}
    </div>
    </Main>
  );
};

export default Products2;

const Main = styled.div`
  width: 100%;


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
