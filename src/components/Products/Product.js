import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  addToCart,
  fetchUserProducts,
} from "../../features/cartSlice/cartSlice";
import { addToCart2 } from "../../features/AuthSlice/AuthSlice";

const Product = ({
  product_title,
  product_main_image_url,
  product_id,
  app_sale_price,
}) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  const [iid, setid] = useState(product_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handle = () => {
    if (user) {
      return navigate(`/${id}/details/${iid}`);
    }
    navigate(`/details/${iid}`);

    setid("");
  };
  console.log(id);
  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(fetchUserProducts(id));
  }, [dispatch]);
  const handle2 = () => {
    if (user) {
      console.log({ product_id, product_title, product_main_image_url });
      return dispatch(
        addToCart2({
          id: product_id,
          title: product_title,
          Image: product_main_image_url,
          price: app_sale_price,
          userid: user?.user?._id,
        })
      );
    }
    console.log(",kkk");
    dispatch(
      addToCart({
        id: product_id,
        title: product_title,
        Image: product_main_image_url,
        price: app_sale_price,
        totalPrice: app_sale_price,
        userid: user?.user?._id,
      })
    );
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
