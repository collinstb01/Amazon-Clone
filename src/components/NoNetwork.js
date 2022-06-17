import React from "react";
import styled from "styled-components";
import img from "../assets/search.svg";

const NoNetwork = ({ message }) => {
  return (
    <Main>
      <div className="message">
        <div className="img-for-noservice">
          <img src={img} className="img1" />
        </div>
        <p>{message}</p>
      </div>
    </Main>
  );
};

export default NoNetwork;

const Main = styled.div`
  .message {
    padding: 30px 0px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
  }

  .img-for-noservice {
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


    img {
      width: 200%;
      height: auto;
    }
  }
`;
