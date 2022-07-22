import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { signUp,signIn } from "../features/AuthSlice/AuthSlice";
import Loader from "../components/Loader";
import Toast from "../components/toasts";

const Auth = () => {
  const {user, loading} = useSelector((state) => state.auth)
  const [message, setMessage] = useState("")
  console.log(message)

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const user2 = localStorage.getItem("profile")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signin, setSignIn] = useState(true);
  const [show, setShow] = useState(false);

  const handle = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handle2 = () => {
    setSignIn((e) => !e);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   if (!signin) {
    dispatch(signUp({input, navigate, setMessage}))
   } else {
    dispatch(signIn({input, navigate, setMessage}))
   }
   
    setShow(true)
  }
  return (
    <Main>
      <img src={img} />
      <form onSubmit={handleSubmit}>
        {!signin && (
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
        {!signin && (
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={input?.confirmPassword}
            onChange={handle}
          />
        )}
        <Button variant="secondary" type="submit">{signin ? "Sign In" : "Sign Up"}</Button>
        <div onClick={handle2} className="signbtn">
          <span>
            {signin
              ? "Dont Have an account Sign Up"
              : "have an account with us, Log in"}
          </span>
        </div>
        {
          (show && !message) && <div>
            { loading && <Loader />}
          </div>
        }
      </form>
      <Toast message={message} />
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
  .warning {
    padding: 10px 0px;
  }
`;
