import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import DetailsPage from "./Pages/DetailsPage";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route
            path="/"
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
        </Routes>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div``;
