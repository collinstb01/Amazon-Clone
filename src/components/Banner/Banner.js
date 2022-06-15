import { Button } from 'bootstrap'
import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/amazonguy.jpg"

const Banner = () => {
  return (
    <Main>
        <div>
            <p>Buy from us today</p>
            <h1>Lorem Ipsum some dummy text</h1>
            <p>some text i dont even understand</p>
            <Button>Shop Now</Button>
        </div>
        <div>
            <img src={img1} />
        </div>
    </Main>
  )
}

export default Banner

const Main = styled.div`


`