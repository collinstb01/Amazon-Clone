import React, { useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux/es/exports'
import { fetchProductforDetails } from '../../features/productSlice/productSlice'

const Product2 = ({product_title, product_main_image_url, product_id}) => {
  const [id, setid] = useState(product_id)

    const navigate = useNavigate()
  const handle =() => {
    console.log(product_id)
    navigate(`/details/${id}`)
    setid('')
  }
 
  return (
    <Main>
      <span>instock</span>
       <div className="img-div" onClick={handle}>
        <img src={product_main_image_url}/>
      </div>
      <h1>{product_title}</h1>
    </Main>
  )
}

export default Product2

const Main = styled.div`
width: auto;
font-size: 13px;
padding: 20px 0px;
box-shadow: -3px 4px 2px whitesmoke;
cursor: pointer;
position: relative;

span {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  border-radius: 5px;
  padding:5px 8px;
  background-color: #cd9042;
}
h1 {
  margin-left: 5px;
  font-size: 13px;
} 

.img-div{
  width: 100%;
  display: grid;
  place-items: center;
}
img {
  width: 100px;
  height: 100px;
  
}
`