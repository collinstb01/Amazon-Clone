import React from "react";

const SearchProducts = ({ product_title, product_main_image_url }) => {
  return (
    <div>
      <div>
        <img src={product_main_image_url} />
      </div>
      <h1>{product_title}</h1>
    </div>
  );
};

export default SearchProducts;
