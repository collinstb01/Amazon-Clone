import React from "react";

const SingleDetailPage = ({ product_title,product_small_image_urls }) => {
  return (
    <div>
      <div>
        <img src={product_small_image_urls?.slice(0, 1)} />
      </div>
      <h1>{product_title}</h1>
    </div>
  );
};

export default SingleDetailPage;
