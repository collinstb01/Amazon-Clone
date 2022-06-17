import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductByCatefory } from "../features/productSlice/productSlice";

const Category = ({ name, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handle2() {
    `/search/query?${id}`;
    console.log(id);
  }
  useEffect(() => {
    dispatch(fetchProductByCatefory());
  }, []);
  return (
    <div>
      <p onClick={handle2}>{name}</p>
    </div>
  );
};

export default Category;
