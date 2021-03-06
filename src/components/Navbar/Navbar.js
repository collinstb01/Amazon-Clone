import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductforSearch } from "../../features/productSlice/productSlice";
import { getUser } from "../../features/AuthSlice/AuthSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  
  const [userr, setuser] = useState("");

  const { id } = useParams();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const handleSearch = () => {
    if (input === "") {
      return;
    }
    dispatch(fetchProductforSearch(input));
    // console.log('sss')
   if (userr) {
    navigate(`/${id}/search/query?${input}`);
   } else {
    navigate(`/search/query?${input}`);
   }
  };

  useEffect(() => {   
        setuser(JSON.parse(localStorage.getItem("profile")))
  }, []);

  const auth = () => {
    localStorage.removeItem("profile")
   
    navigate("/auth")
  }
  const cartRoute = () => {
    if (!userr) {
      navigate("/cart")
    } else {
      navigate(`/${id}/cart`)
    }
    console.log(id)

  }
  return (
    <Main className="header">
      <Link to={userr ? `/${id}` : "/"}>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="header__delivery">
        <div className="header__deliveryLogo">
          <BiLocationPlus />
        </div>
        <div className="header__deliveryText">
          <div className="header__deliveryTextName">
            <p>Deliver to Bazos</p>
          </div>

          <div className="header__deliveryTextLocation">
            <p>Istanbul 3400</p>
          </div>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BiSearch className="header__searchIcon" onClick={handleSearch} />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello {userr ? userr?.user?.name : "Guest"}
          </span>
            <span className="header__optionLineTwo" onClick={auth}>
              {userr ? "Sign Out" : "Sign In"}
            </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>


        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket" onClick={cartRoute}>
            <BiCartAlt />
          <span className="header__optionLineTwo header__basketCount">
            {!userr ? carts?.length : carts?.userProduct?.length}
          </span>
        </div>
      </div>
    </Main>
  );
}

export default Navbar;

const Main = styled.div`
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 600px) {
    height: auto;
    flex-direction: column;
  }
  .header__logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 6px;
    align-items: center;
    border-color: #131921;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    cursor: pointer;
    @media (max-width: 700px) {
      margin-top: 15px;
    }
  }

  .header__delivery {
    margin-top: 6px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 6px;
    border-color: #131921;
  }

  .header__deliveryLogo {
    color: rgb(236, 234, 234);
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .header__deliveryText {
    padding-left: 5px;
    font-size: 10px !important;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .header__deliveryTextLocation {
    color: rgb(236, 233, 233);
  }

  .header__deliveryTextName {
    color: rgb(150, 149, 149);
  }
  p {
    font-size: 13px;
    line-height: 10px;
  }
  .header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header__searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
    border-radius: 5px 0 0 5px;
    box-sizing: initial;
  }

  .header__searchInput:focus {
    box-shadow: 0 0 3px 3px #cd9042;
    outline-style: none;
  }

  .header__searchIcon {
    padding: 5px;
    height: 22px !important;
    box-sizing: content-box;
    background-color: #cd9042;
  }

  .header__nav {
    display: flex;
    justify-content: space-evenly;
  }

  .header__nav > a {
    text-decoration: none;
  }

  .header__option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    border-color: #131921;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 6px;
  }

  .header__option:hover {
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 6px;
    border-color: white;
  }

  .header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
  }

  .header__optionLineOne {
    font-size: 10px;
  }

  .header__optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .header__optionBasket {
    display: flex;
    align-items: center;
    color: white;
    border-color: #131921;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 9px 5px;
  }

  .header__optionBasket:hover {
    border-color: white;
  }

  .header__basketCount {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
