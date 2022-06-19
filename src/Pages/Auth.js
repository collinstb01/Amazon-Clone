import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../features/AuthSlice/AuthSlice";
import Loader from "../components/Loader";

const Auth = () => {
  const {message, loading} = useSelector((state) => state.auth)
  console.log(message)
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(input);
  const [signIn, setSignIn] = useState(true);
  const [show, setShow] = useState(false);

  const handle = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handle2 = () => {
    console.log("click");
    setSignIn((e) => !e);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUp({input, navigate}))
    setShow(true)
  }
  return (
    <Main>
      <img src={img} />
      <form onSubmit={handleSubmit}>
        {!signIn && (
          <input
            placeholder="Enter Name"
            name="name"
            value={input?.name}
            onChange={handle}
          />
        )}
        <input
          placeholder="Enter Email"
          name="email"
          value={input?.email}
          onChange={handle}
        />
        <input
          placeholder="Enter Password"
          name="password"
          value={input?.password}
          onChange={handle}
        />
        {!signIn && (
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={input?.confirmPassword}
            onChange={handle}
          />
        )}
        <Button variant="secondary" type="submit">{signIn ? "Sign In" : "Sign Up"}</Button>
        <div onClick={handle2} className="signbtn">
          <span>
            {signIn
              ? "Dont Have an account Sign Up"
              : "have an account with us, Log in"}
          </span>
        </div>
        {
          show && <div>
            { loading && <Loader />}
          </div>
        }
      </form>
    </Main>
  );
};

export default Auth;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  img {
    width: 100px;
  }
  input {
    padding: 8px 7px;
    margin-block: 10px;
    width: 100%;
    outline: none;
  }
  input:focus {
    border: none;
    box-shadow: inset 0px -1px 7px #6856495e;
  }
  form {
    background-color: orange;
    width: auto;
    padding: 20px 40px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .signbtn {
      text-transform: capitalize;
      cursor: pointer;
      color: white;
    }
  }
`;
