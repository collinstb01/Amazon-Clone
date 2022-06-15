import { Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import img1 from "../../assets/img3.png";

const Banner = () => {
  return (
    <Main>
      <div className="left">
        <span>Buy from us today</span>
        <span>Lorem Ipsum some dummy text</span>
        <p>some text i dont even understand</p>
        <Button id="btn">Shop Now</Button>
      </div>
      <div>
        <img src={img1} />
      </div>
    </Main>
  );
};

export default Banner;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d9c45285;
  width: 100%;
  height: auto;
  padding-top: 20px ;
  margin-top: 20px;
  overflow: hidden;
  .left {
    display: flex;
    flex-direction: column;
  }
  .left span:nth-child(2) {
    font-size: 40px;
    width: 88%;
  }
  img {
    width: 400px;
    height: 400px;
  }

  #btn {
    width: 25%;
  }
`;
