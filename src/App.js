import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import CartPage from "./Pages/CartPage";
import DetailsPage from "./Pages/DetailsPage";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import Auth from "./Pages/Auth";

const App = () => {
  const user = localStorage.getItem("profile");
  return (
    <Router>
      <Main>
        <Routes>
            <Route
              path={!user ? "/" : "/:id"}
              element={
                <div>
                  <Home />
                </div>
              }
            />
          <Route
            path="/search/:query"
            element={
              <div>
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/details/:id"
            element={
              <div>
                <DetailsPage />
              </div>
            }
          />
          <Route
            path={!user ? "/cart" : "/:id/cart/"}
            element={
              <div>
                <CartPage />
              </div>
            }
          />
       
            <Route
            path="/auth"
            element={
              <div>
                <Auth />
              </div>
            }
          />
      
        </Routes>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div``;
