import React from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsArrowBarDown } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { GoLocation } from "react-icons/go";

const SingleDetailPage = ({
  product_main_image_url,
  product_title,
  product_small_image_urls,
  product_details,
  isPrime,
  product_overview,
}) => {
  if (product_overview) {
    const arr = Object?.entries(product_overview)
  }
  
  return (
    <Main>
      <div className="product-details">
        <div className="product-details-img">
          <img src={product_main_image_url} />
        </div>
        <div className="product-details-text">
          <h1>{product_title}</h1>
          <p>Visit their Official Website</p>
          <div className="ratings">
            <span className="icons">
              <BsStarFill className="icon" /> <BsStarHalf className="icon" />{" "}
              <BsArrowBarDown />
            </span>
            <span>{product_details?.Customer_Reviews}</span>
          </div>
          <div>
            <h3>{isPrime ? "Temporily Out Of Stock" : "In Stock"}</h3>
            <p>
              {isPrime
                ? "We are trying hard to be in stock as soon as possible"
                : "Fully In Stock"}
            </p>
              {product_overview &&
               Object?.entries(product_overview)?.map((val) => {
                  return (
                    <div>
                      <span>{val[0]?.replace(/_/g, " ")}: </span>
                    <span>{val[1]}</span>
                    </div>
                  )
                })
              }
          </div>
        </div>
        <div className="product-details-ava">
          <div className="card">
            <h3>{isPrime ? "Temporily Out Of Stock" : "In Stock"}</h3>
            <p>
              {isPrime
                ? "We are trying hard to be in stock as soon as possible"
                : "Fully In Stock"}
            </p>
            <Button variant="warning">See Similar items</Button>
            <span>
              <GoLocation /> Deliver to Nigeria
            </span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SingleDetailPage;

const Main = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  .product-details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
  .product-details-img {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 190px;
      height: auto;
    }
  }
  .product-details-ava {
    height: 150px;
    display: flex;
    justify-content: center;
    text-align: center;
    .card {
      width: 50%;
      height: fit-content;
      padding: 20px;
      background-color: whitesmoke;

      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  .product-details-text {
    width: 100%;

    @media (max-width: 1000px) {
      padding:0px 20px;
      width: 80%;
    }
    h1 {
      font-size: 25px;
    }
    .ratings {
      border-bottom: 1px solid gray;
    }
  }

  .icons {
    padding-right: 15px;
    text-align: cneter;
    .icon {
      color: orange;
    }
  }

  li {
    list-style: none;
  }
`;
