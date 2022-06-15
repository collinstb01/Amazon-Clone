import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner/Banner'
import Footer from '../components/footer/footer'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Slider />
     <Main>
     <Products />
     <Banner />
      <Footer/>
     </Main>
    </div>
  )
}

export default Home

const Main = styled.div`
box-sizing: border-box;

`