import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
import SearchProducts from "../components/SearchProducts/SearchProducts";
import Loader from "../components/Loader";
import Footer from "../components/footer/footer";
import { Button } from "react-bootstrap";

const SearchPage = () => {
const [loadmore, setLoadmore] = useState(false)
  const { searchProducts, loading } = useSelector((state) => state.product);
  const _searchProducts = searchProducts?.docs;
  console.log(searchProducts);

  function handle() {
    setLoadmore((e) => !e)
  }
  return (
    <Main>
      <Navbar />
      {loading && <Loader />}
      {!loadmore &&_searchProducts?.slice(0, 10).map((product) => (
        <SearchProducts {...product} />
      ))}
       {loadmore && _searchProducts?.map((product) => (
        <SearchProducts {...product} />
      ))}
      <Button onClick={handle}>{loadmore ?`Show Less` : "Load More"}</Button>
      <Footer />
    </Main>
  );
};

export default SearchPage;

const Main = styled.div``;
