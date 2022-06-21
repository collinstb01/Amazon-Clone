import { Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SubTotal = ({total}) => {
  const { carts } = useSelector((state) => state.cart);

  return (
    <Main>
      <h5>Subtotal({carts.length && carts?.userProduct?.length} items): ${total}</h5>
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
