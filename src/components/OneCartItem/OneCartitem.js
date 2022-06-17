import React from 'react'
import styled from 'styled-components';
import { removeProduct } from '../../features/cartSlice/cartSlice';
import { useDispatch } from 'react-redux';

const OneCartitem = ({Image, title, price, id, quantity, totalPrice}) => {
    const dispatch = useDispatch()

    const handle2 = () => {
        console.log(id);
        dispatch(removeProduct({id, price, quantity, totalPrice}));
      };
  return (
    <Main className="cart">
          <img className="cart__image" src={Image} alt="" />
          <div className="cart__info">
            <p className="cart__title">{title}</p>
            <p className="cart__price">
            <p><span>-</span> {quantity} <span>+</span> </p>
              <small>$</small>
              <p>{totalPrice}</p>
            </p>
            <div className="cart__rating">
              {/* {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))} */}
              ⭐
            </div>
          </div>
          <div className='price'>
            <h5>{price}</h5>
          </div>
        </Main>
  )
}

export default OneCartitem
const Main = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 30%;
    border-bottom: 1px solid lightgray;
    padding: 15px 0;
    width: 85%;
  .cart__info {
    padding-left: 20px;
  }

  .cart__info > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    padding: 5px;
    border-radius: 5px;
    color: #111;
  }

  .cart__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  .cart__rating {
    display: flex;
  }

  .cart__title {
    font-size: 17px;
    font-weight: 800;
  }

  @media screen and (max-width: 400px) {
    .cart {
      flex-direction: column;
      align-items: center;
    }
  }
  .price {
    display: flex;
    justify-content: flex-end;
  }
`;

