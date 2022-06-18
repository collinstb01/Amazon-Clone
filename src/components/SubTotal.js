import { Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const SubTotal = () => {
  return (
    <Main>
      <h5>Subtotal(2 items): $16.23</h5>
      <div>
        {" "}
        <input type="checkbox" /> <span>This order contains a gift</span>
      </div>
      <Button variant="warning">Proceed To Checkout</Button>
    </Main>
  );
};

export default SubTotal;

const Main = styled.div`
width: auto;
margin-top:15px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 1px 1px 1px gray;

`;
