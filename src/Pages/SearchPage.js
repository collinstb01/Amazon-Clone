import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
import SearchProducts from "../components/SearchProducts/SearchProducts";
import Loader from "../components/Loader";
import Footer from "../components/footer/footer";
import { Button } from "react-bootstrap";
import { BiStar } from "react-icons/bi";

const SearchPage = () => {
  const [loadmore, setLoadmore] = useState(false);
  const { searchProducts, loading } = useSelector((state) => state.product);
  const _searchProducts = searchProducts?.docs;
  console.log(searchProducts);

  function handle() {
    setLoadmore((e) => !e);
  }
  return (
    <Main>
      <Navbar />

      <div className="bottom">
        <div className="left"></div>
        <div className="right">
          <div className="results">
            <h1>Results</h1>
            <p>Price and details may vary based on product color and size</p>
          </div>
          {loading && <Loader />}
          <div className="products">
            {!loadmore &&
              _searchProducts
                ?.slice(0, 10)
                .map((product) => <SearchProducts {...product} />)}
            {loadmore &&
              _searchProducts?.map((product) => (
                <SearchProducts {...product} searchProducts={searchProducts} />
              ))}
          </div>
          <Button onClick={handle}>
            {loadmore ? `Show Less` : "Load More"}
          </Button>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default SearchPage;

const Main = styled.div`
  width: 100%;
  height: auto;

  .bottom {
    display: flex;
  }
  .left {
    width: 25%;
    background-color: black;
    height: 100vh;
  }
  .right {
    width: 75%;

    .results {
      padding: 0px 20px;
      box-shadow: 1px 1px 2px gray;
    }

    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 15px;

      @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
